// app/routes/dashboard.blog_.new.jsx

import { json, redirect } from '@remix-run/node';
import { Form, Link, useActionData } from '@remix-run/react';
import { prisma } from '~/db.server';
import { uploadImage } from '~/utils/cloudinary.server';
import { MarkdownCheatsheet } from '~/components/markdown-cheatsheet';
import { CATEGORIES } from '~/utils/blog-categories';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get('title');
  const slug = formData.get('slug');
  const content = formData.get('content');
  const excerpt = formData.get('excerpt');
  const image = formData.get('image');
  const imageAlt = formData.get('imageAlt');
  const published = formData.get('published') === 'on';
  const category = formData.get('category'); // Get category
  const subcategory = formData.get('subcategory');
  
  // Validate
  const errors = {};
  if (!title) errors.title = 'Title is required';
  if (!slug) errors.slug = 'Slug is required';
  if (!content) errors.content = 'Content is required';
  if (!category) errors.category = 'Category is required';
  
  // Your existing image validation code
  if (image && image.size > 0) {
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (image.size > maxSize) {
      errors.image = 'Image must be less than 5MB';
    }
    
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(image.type)) {
      errors.image = 'Invalid image type. Please use JPEG, PNG, GIF, or WebP';
    }
  }
  
  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  // Your existing image upload code
  let imageUrl = null;
  if (image && image.size > 0) {
    try {
      const arrayBuffer = await image.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      imageUrl = await uploadImage(buffer);
    } catch (error) {
      console.error('Image upload error:', error);
      return json({ errors: { image: 'Failed to upload image. Please try again.' } });
    }
  }
  
  // Create new post with category
  const post = await prisma.blogPost.create({
    data: {
      title,
      slug,
      content,
      excerpt: excerpt || null,
      imageUrl,
      imageAlt: imageAlt || null,
      published,
      category,
      subcategory: subcategory || null,
    },
  });
  
  return redirect(`/dashboard/blog/${post.id}`);
};

export default function DashboardBlogNew() {
  const actionData = useActionData();
  
  return (
    <div className="flex-1 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              New Post
            </h1>
            <Link
              to="/dashboard/blog"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              ← Back to Blog Posts
            </Link>
          </div>
          
          <Form method="post" encType="multipart/form-data" className="mt-8 space-y-8">
            {/* Category selection */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                Category
              </label>
              <div className="mt-2">
                <select
                  id="category"
                  name="category"
                  className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue=""
                >
                  <option value="" disabled>Select a category</option>
                  {CATEGORIES.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                {actionData?.errors?.category ? <p className="mt-2 text-sm text-red-600">{actionData.errors.category}</p> : null}
              </div>
            </div>

            {/* Subcategory field */}
            <div>
              <label htmlFor="subcategory" className="block text-sm font-medium leading-6 text-gray-900">
                Subcategory (Optional)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="subcategory"
                  id="subcategory"
                  className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="E.g., Website Essentials, Client Management"
                />
              </div>
            </div>
            
            {/* Rest of your existing form fields */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {actionData?.errors?.title ? <p className="mt-2 text-sm text-red-600">{actionData.errors.title}</p> : null}
              </div>
            </div>
            
            <div>
              <label htmlFor="slug" className="block text-sm font-medium leading-6 text-gray-900">
                Slug
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="slug"
                  id="slug"
                  className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {actionData?.errors?.slug ? <p className="mt-2 text-sm text-red-600">{actionData.errors.slug}</p> : null}
              </div>
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                Hero Image
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-goldenrod file:text-white
                    hover:file:bg-indigo-600"
                />
                {actionData?.errors?.image ? <p className="mt-2 text-sm text-red-600">{actionData.errors.image}</p> : null}
              </div>
            </div>

            <div>
              <label htmlFor="imageAlt" className="block text-sm font-medium leading-6 text-gray-900">
                Image Alt Text
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="imageAlt"
                  id="imageAlt"
                  className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Describe the image for accessibility and SEO"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium leading-6 text-gray-900">
                Excerpt (Optional)
              </label>
              <div className="mt-2">
                <textarea
                  name="excerpt"
                  id="excerpt"
                  rows={3}
                  className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Leave empty to auto-generate from content"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="content" className="block text-sm font-medium leading-6 text-gray-900">
                Content (Markdown)
              </label>
              <div className="mt-2">
                <textarea
                  name="content"
                  id="content"
                  rows={15}
                  className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {actionData?.errors?.content ? <p className="mt-2 text-sm text-red-600">{actionData.errors.content}</p> : null}
              </div>
            </div>
            
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="published"
                  name="published"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="published" className="font-medium text-gray-900">
                  Published
                </label>
                <p className="text-gray-500">Make this post visible to the public</p>
              </div>
            </div>
            
            <div className="flex justify-end gap-x-3">
              <Link
                to="/dashboard/blog"
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="rounded-md bg-goldenrod px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Post
              </button>
            </div>
          </Form>
        </div>
      </div>
      <MarkdownCheatsheet />
    </div>
  );
}