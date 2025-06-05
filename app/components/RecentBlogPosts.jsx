import { Link } from '@remix-run/react'
import { motion } from 'framer-motion'
import { json } from '@remix-run/node'
import { prisma } from '~/db.server'
import { marked } from 'marked'

export const loader = async () => {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: 3, // Only get the 3 most recent posts
  });

  // Convert markdown to HTML for excerpts
  const postsWithHtml = posts.map(post => ({
    ...post,
    excerptHtml: marked(post.excerpt || post.content.slice(0, 200) + '...'),
  }));
  
  return json({ posts: postsWithHtml });
};

export default function RecentBlogPosts({ posts }) {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Digital Storytelling Insights
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Strategic insights on film production, web development, and revenue-driving digital content for upstate NY businesses
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col items-start overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 group"
            >
              {/* Make entire card clickable */}
              <Link to={`/blog/${post.slug}`} className="absolute inset-0 z-10">
                <span className="sr-only">View {post.title}</span>
              </Link>
              
              {/* Image container with title overlay */}
              <div className="relative w-full h-64 bg-gray-200">
                {post.imageUrl ? (
                  <img
                    src={post.imageUrl}
                    alt={post.imageAlt || post.title}
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
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h2 className="text-white font-semibold text-lg drop-shadow-sm">
                    {post.title}
                  </h2>
                  <time dateTime={post.createdAt} className="text-gray-200 text-xs">
                    {new Date(post.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 flex items-center justify-center">
          <Link
            to="/blog"
            className="rounded-md bg-pine px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-gray-200 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            View All Insights
          </Link>
        </div>
      </div>
    </section>
  )
}