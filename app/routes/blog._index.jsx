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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Blog Posts
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Insights, tips, and stories about outdoor marketing and digital strategies.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              {post.imageUrl && (
                <div className="relative w-full">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                </div>
              )}
              <div className="max-w-xl">
                <div className="flex items-center gap-x-4 text-xs mt-6">
                  <time dateTime={post.createdAt} className="text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <div className="group relative">
                  <h2 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-goldenrod">
                    <Link to={`/blog/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h2>
                  <div 
                    className="mt-5 text-sm leading-6 text-gray-600 prose prose-sm max-w-none line-clamp-3" 
                    dangerouslySetInnerHTML={{ __html: post.excerptHtml }} 
                  />
                </div>
              </div>
            </article>
          ))}
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