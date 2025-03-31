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

export default function BlogPost() {
  const { post } = useLoaderData();
  
  return (
    <div className="flex-1 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {post.title}
            </h1>
            <Link
              to="/blog"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              ← Back to Blog
            </Link>
          </div>

          {post.imageUrl && (
            <div className="mt-6">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          )}

          {post.excerpt && (
            <div className="mt-6">
              <p className="text-lg text-gray-600 italic">{post.excerpt}</p>
            </div>
          )}

          <div className="mt-8 prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>Published: {new Date(post.createdAt).toLocaleDateString()}</p>
            {post.updatedAt && <p>Last updated: {new Date(post.updatedAt).toLocaleDateString()}</p>}
          </div>
        </div>
      </div>
    </div>
  );
} 