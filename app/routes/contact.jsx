import { json, redirect } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { Resend } from 'resend';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export async function action({ request }) {
    console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY);
    const resend = new Resend(process.env.RESEND_API_KEY)
    let formData = await request.formData();
    
    // Check honeypot field
    const honeypotValue = formData.get('website');
    if (honeypotValue) {
        // If honeypot field is filled, silently reject but return success to avoid tipping off bots
        console.log('Honeypot caught a bot submission');
        return json({ success: true });
    }

    const firstName = formData.get('first-name');
    const lastName = formData.get('last-name');
    const email = formData.get('email');
    const phone = formData.get('phone-number');
    const message = formData.get('message');

    // Check for "null" in any form field
    const formValues = [firstName, lastName, email, phone, message].join(' ').toLowerCase();
    if (formValues.includes('null')) {
        return redirect('https://www.fbi.gov/investigate/cyber');
    }

    // Add validation
    if (!firstName || !lastName || !email || !message || firstName === lastName) {
        return json({ error: 'All fields except phone are required' }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return json({ error: 'Please provide a valid email address' }, { status: 400 });
    }

    // Phone number validation
    if (phone) {
      // Remove any non-digit characters
      const cleanPhone = phone.replace(/\D/g, '');
      
      // Remove leading '1' if present
      const nationalNumber = cleanPhone.startsWith('1') ? cleanPhone.slice(1) : cleanPhone;
      
      // Check if it's a valid US phone number (10 digits)
      if (nationalNumber.length !== 10) {
        return json({ error: "Please enter a valid 10-digit US phone number" }, { status: 400 });
      }

      // Check for 555 area code
      if (nationalNumber.substring(0,3) === '555') {
        return json({ error: "Invalid area code" }, { status: 400 });
      }

      // Validate first digit is between 2-9 for valid US area code
      if (nationalNumber[0] === '0' || nationalNumber[0] === '1') {
        return json({ error: "Invalid US area code" }, { status: 400 });
      }
    }

    // Check for bot submissions by validating submission timing
    const formStartTime = await formData.get('formStartTime');
    const submissionTime = Date.now();
    const minSubmissionTime = 3000; // 3 seconds
    const maxSubmissionTime = 3600000; // 1 hour

    if (!formStartTime) {
        return json({ error: 'Invalid form submission' }, { status: 400 });
    }

    const timeDiff = submissionTime - parseInt(formStartTime);
    
    // Reject if form submitted too quickly (bot) or after too long (session expired)
    if (timeDiff < minSubmissionTime || timeDiff > maxSubmissionTime) {
        return json({ error: 'Invalid form submission' }, { status: 400 });
    }

    const { error: sendError } = await resend.emails.send({
        from: 'New Form Submission <onboarding@alerts.razorhollow.com>',
        to: ['rob@razorhollow.com'],
        subject: 'Contact Form Submission',
        html: `
                <p>${message}</p>
                <p>sent by ${firstName} ${lastName}, phone: ${phone}</p><p>email: ${email}</p>
              `
    });

    if (sendError) {
        console.log(sendError);
        return json({ error: sendError.message }, 400);
    }

    return redirect(`/thanks`);
}

export default function Contact() {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Info */}
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
              </svg>
            </div>
            
            {/* Main Info Section */}
            <h1 className="text-4xl font-bold text-gray-900">Ready for Professional Video That Drives Results?</h1>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Let's Create Your Complete Digital Story.</h2>
            
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Professional film production with the technical expertise to ensure your videos work effectively online. Based in the Elmira/Corning area, we serve businesses throughout the Buffalo-Rochester-Syracuse corridor with Hollywood-quality equipment and revenue-focused storytelling.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Unlike typical videographers who hand you files and disappear, we provide complete video marketing support—from initial concept through technical deployment. Your videos will look professional and perform effectively across all your marketing channels.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you need corporate storytelling, training videos, product demonstrations, or the technical support to showcase them effectively online, we have the expertise to drive measurable business results for upstate New York companies.
            </p>
            
            {/* Contact Information */}
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  Elmira/Corning, NY<br />
                  <span className="text-sm text-gray-500">Serving Buffalo → Rochester → Syracuse corridor</span>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="tel:+1 (607) 684-5690">
                    +1 (607) 684-5690
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="mailto:rob@razorhollow.com">
                    rob@razorhollow.com
                  </a>
                </dd>
              </div>
            </dl>
            
            {/* FAQ Section */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Frequently Asked Questions</h3>
              
              <dl className="mt-6 space-y-6">
                <div>
                  <dt className="text-lg font-medium text-gray-900">How long does a typical video project take?</dt>
                  <dd className="mt-2 text-base text-gray-600">Most video projects take 2-4 weeks from initial consultation to final delivery, depending on scope and complexity. Projects requiring technical deployment support (landing pages, integration) may take 3-6 weeks. I'll provide a detailed timeline during our consultation.</dd>
                </div>
                
                <div>
                  <dt className="text-lg font-medium text-gray-900">Do you work with businesses outside upstate New York?</dt>
                  <dd className="mt-2 text-base text-gray-600">My primary focus is serving businesses in the Buffalo-Rochester-Syracuse corridor, but I occasionally work with companies outside this area when the project aligns well with my expertise. Feel free to reach out to discuss your specific needs.</dd>
                </div>
                
                <div>
                  <dt className="text-lg font-medium text-gray-900">What makes your video services different from other producers?</dt>
                  <dd className="mt-2 text-base text-gray-600">I don't just create beautiful videos—I ensure they work effectively for your business. This includes technical deployment support, optimization for different platforms, and revenue-focused storytelling methodology. Most videographers can't handle the technical integration side.</dd>
                </div>
                
                <div>
                  <dt className="text-lg font-medium text-gray-900">What should I prepare before our first meeting?</dt>
                  <dd className="mt-2 text-base text-gray-600">It's helpful to have your business goals, target audience information, examples of videos you like, and a clear idea of how you plan to use the video content. Most importantly, be ready to discuss what success looks like and how video fits into your overall marketing strategy.</dd>
                </div>
                
                <div>
                  <dt className="text-lg font-medium text-gray-900">Do you provide the technical support for video deployment?</dt>
                  <dd className="mt-2 text-base text-gray-600">Yes! This is what sets me apart. I can create landing pages, integrate videos into your existing website, set up conversion tracking, and ensure everything works optimally across all devices. You get both the creative production and technical deployment expertise.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        
        {/* Right Column - Form */}
        <Form method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            {/* Hidden honeypot field */}
            <div style={{ display: 'none' }}>
                <label htmlFor="website">Website</label>
                <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                />
                <input 
                    type="hidden"
                    name="formStartTime"
                    value={Date.now()}
                />
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pine sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pine sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pine sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pine sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pine sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-pine px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export const meta = () => {
  return [
    { title: 'Contact Razor Hollow | Professional Video Production | Upstate NY' },
    { name: "description", content: "Ready for professional video that drives results? Contact Razorhollow for film production and video marketing support across the Buffalo-Rochester-Syracuse corridor." },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://www.razorhollow.com/contact"
    },
  ]
}