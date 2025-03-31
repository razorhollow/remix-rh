import { json, redirect } from '@remix-run/node';
import { Form, Link, useActionData } from '@remix-run/react';
import { prisma } from '~/db.server';
import { MarkdownCheatsheet } from '~/components/markdown-cheatsheet';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get('title');
  const slug = formData.get('slug');
  const content = formData.get('content');
  const excerpt = formData.get('excerpt');
  const imageUrl = formData.get('imageUrl');
  const published = formData.get('published') === 'on';
  
  // Validate
  const errors = {};
  if (!title) errors.title = 'Title is required';
  if (!slug) errors.slug = 'Slug is required';
  if (!content) errors.content = 'Content is required';
  
  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }
  
  // Create new post
  const post = await prisma.blogPost.create({
    data: {
      title,
      slug,
      content,
      excerpt: excerpt || null,
      imageUrl: imageUrl || null,
      published,
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
          
          <Form method="post" className="mt-8 space-y-8">
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
                {actionData?.errors?.title && (
                  <p className="mt-2 text-sm text-red-600">{actionData.errors.title}</p>
                )}
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
                {actionData?.errors?.slug && (
                  <p className="mt-2 text-sm text-red-600">{actionData.errors.slug}</p>
                )}
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
              <label htmlFor="imageUrl" className="block text-sm font-medium leading-6 text-gray-900">
                Image URL
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                {actionData?.errors?.content && (
                  <p className="mt-2 text-sm text-red-600">{actionData.errors.content}</p>
                )}
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