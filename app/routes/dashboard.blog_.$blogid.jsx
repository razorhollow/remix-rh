import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { prisma } from '~/db.server';
import { marked } from 'marked';

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
  
  return json({ post: { ...post, contentHtml } });
};

export default function DashboardBlogPostView() {
  const { post } = useLoaderData();
  
  return (
    <div className="flex-1 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {post.title}
            </h1>
            <div className="flex items-center gap-4">
              <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                post.published ? 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20' : 'bg-yellow-50 text-yellow-800 ring-1 ring-inset ring-yellow-600/20'
              }`}>
                {post.published ? 'Published' : 'Draft'}
              </span>
              <Link
                to={`/dashboard/blog/${post.id}/edit`}
                className="text-sm text-indigo-600 hover:text-indigo-900"
              >
                Edit
              </Link>
              <Link
                to="/dashboard/blog"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                ← Back to Blog Posts
              </Link>
            </div>
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