import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useActionData
} from "@remix-run/react";


import { getUser } from "~/session.server";
import stylesheet from "~/tailwind.css";

import Footer from "./components/Footer"
import Navbar from "./components/NavBar";
import { prisma } from "./db.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  {rel: "stylesheet", href: "https://rsms.me/inter/inter.css"},
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({ user: await getUser(request) });
};

export const action = async ({request}: ActionFunctionArgs) => {
  const formData = await request.formData()
  const email = formData.get('email-address') as string

  //check for existing subscriber
  const exists = await prisma.subscriber.findUnique({
    where: {
      email
    }
  })

  if (exists) {
    return json({ sucess: false, message: "Looks like you're already on the list!"})
  }
  
  try {
    await prisma.subscriber.create({
      data: {
        email,
      }
    })
    return json({ success: true, message: "Thanks for signing up! Welcome to the pack" })
  } catch (error) {
    return json({ success: false, message: "Failed to subscribe. Please try again."})
  }
}

export default function App() {
  const actionData = useActionData()
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer actionData={actionData}/>
      </body>
    </html>
  );
}
