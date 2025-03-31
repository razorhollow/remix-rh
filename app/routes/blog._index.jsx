import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { prisma } from '~/db.server';
import { marked } from 'marked';

export const loader = async () => {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  });

  // Convert markdown to HTML for excerpts
  const postsWithHtml = posts.map(post => ({
    ...post,
    excerptHtml: marked(post.excerpt || post.content.slice(0, 200) + '...'),
  }));
  
  return json({ posts: postsWithHtml });
};

export default function BlogIndex() {
  const { posts } = useLoaderData();
  
  return (
    <div className="flex-1 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Blog Posts
          </h1>
          
          <div className="mt-8 space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                {post.imageUrl && (
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.createdAt} className="text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </time>
                  </div>
                  <div className="group relative max-w-xl">
                    <h2 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link to={`/blog/${post.id}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h2>
                    <div className="mt-5 text-sm leading-6 text-gray-600 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: post.excerptHtml }} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const meta = () => {
  return [
    { title: 'Blog | Razor Hollow - Outdoor Marketing Insights' },
    { name: "description", content: "Explore our blog for insights, tips, and stories about outdoor marketing, web development, and digital strategies for outdoor businesses." },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://www.razorhollow.com/blog"
    },
  ]
} 