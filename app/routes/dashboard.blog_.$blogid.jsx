import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { prisma } from '~/db.server';
import { marked } from 'marked';
import { getCategoryById } from '~/utils/blog-categories';

export const loader = async ({ params }) => {
  const { blogid } = params;
  
  const post = await prisma.blogPost.findUnique({
    where: { id: blogid },
  });
  
  if (!post) {
    throw new Response('Not Found', { status: 404 });
  }

  // Convert markdown to HTML
  const contentHtml = marked(post.content);
  
  // Get category information
  const categoryInfo = getCategoryById(post.category);
  
  return json({ 
    post: { ...post, contentHtml },
    categoryInfo
  });
};

export default function DashboardBlogPostView() {
  const { post, categoryInfo } = useLoaderData();
  
  return (
    <div className="flex-1 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/dashboard/blog"
              className="inline-flex items-center gap-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Blog Posts
            </Link>
            <Link
              to={`/dashboard/blog/${post.id}/edit`}
              className="inline-flex items-center gap-1 rounded-md bg-goldenrod px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Edit Post
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {post.title}
            </h1>
            <div className="flex flex-col items-end gap-2">
              <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                post.published ? 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20' : 'bg-yellow-50 text-yellow-800 ring-1 ring-inset ring-yellow-600/20'
              }`}>
                {post.published ? 'Published' : 'Draft'}
              </span>
              <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium bg-${categoryInfo.color}-50 text-${categoryInfo.color}-700 ring-1 ring-inset ring-${categoryInfo.color}-600/20`}>
                {categoryInfo.name}
              </span>
              {post.subcategory ? <span className="text-xs text-gray-500">
                  {post.subcategory}
                </span> : null}
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            <p>URL: /blog/{post.slug}</p>
          </div>

          {post.imageUrl ? <div className="mt-6">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div> : null}

          {post.excerpt ? <div className="mt-6">
              <p className="text-lg text-gray-600 italic">{post.excerpt}</p>
            </div> : null}

          <div className="mt-8 prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>Created: {new Date(post.createdAt).toLocaleDateString()}</p>
            {post.updatedAt ? <p>Last updated: {new Date(post.updatedAt).toLocaleDateString()}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}