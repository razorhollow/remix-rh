import { redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  // Only redirect if we're at the exact /portfolio path
  if (url.pathname === "/portfolio") {
    return redirect("/portfolio/under-construction");
  }
  return null;
}; 