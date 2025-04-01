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
            <article key={post.id} className="relative flex flex-col items-start overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 group">
            {/* Make entire card clickable */}
            <Link to={`/blog/${post.slug}`} className="absolute inset-0 z-10">
              <span className="sr-only">View {post.title}</span>
            </Link>
            
            {/* Image container with title overlay */}
            <div className="relative w-full h-64 bg-gray-200">
              {post.imageUrl ? (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg 
                    className="w-16 h-16 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}
              
              {/* Title overlay at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h2 className="text-white font-semibold text-lg">
                  {post.title}
                </h2>
              </div>
            </div>
            
            {/* Content section */}
            <div className="p-4 w-full relative z-0">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.createdAt} className="text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="mt-3 text-sm leading-6 text-gray-600 prose prose-sm max-w-none line-clamp-3" 
                dangerouslySetInnerHTML={{ __html: post.excerptHtml }} 
              />
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