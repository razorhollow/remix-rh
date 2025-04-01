// app/routes/blog.$slug.jsx

import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { prisma } from '~/db.server';
import { marked } from 'marked';
import { getCategoryById } from '~/utils/blog-categories';

export const loader = async ({ params }) => {
  const { slug } = params;
  
  const post = await prisma.blogPost.findUnique({
    where: { slug },
  });

  if (!post || !post.published) {
    throw new Response('Not Found', { status: 404 });
  }

  // Convert markdown to HTML
  const contentHtml = marked(post.content);
  
  // Get category information
  const categoryInfo = getCategoryById(post.category);
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = await prisma.blogPost.findMany({
    where: { 
      category: post.category,
      slug: { not: post.slug },
      published: true 
    },
    orderBy: { createdAt: 'desc' },
    take: 3,
  });

  return json({ 
    post: { ...post, contentHtml }, 
    categoryInfo,
    relatedPosts
  });
};

export default function BlogPost() {
  const { post, categoryInfo, relatedPosts } = useLoaderData();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Category and date info */}
          <div className="flex items-center gap-x-4 text-xs mb-4">
            <time dateTime={post.createdAt} className="text-gray-500">
              {new Date(post.createdAt).toLocaleDateString()}
            </time>
            <Link 
              to={`/blog?category=${post.category}`}
              className={`relative z-10 rounded-full bg-${categoryInfo.color}-50 px-3 py-1.5 font-medium text-${categoryInfo.color}-600 hover:bg-${categoryInfo.color}-100`}
            >
              {categoryInfo.name}
            </Link>
            {post.subcategory ? <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                {post.subcategory}
              </span> : null}
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h1>
          
          {post.imageUrl ? <img
              src={post.imageUrl}
              alt={post.imageAlt || post.title}
              className="mt-8 aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
            /> : null}
          
          {post.excerpt ? <div className="mt-6">
              <p className="text-xl leading-8 text-gray-700 italic">
                {post.excerpt}
              </p>
            </div> : null}
          
          <div 
            className="prose prose-lg mt-10 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
          
          {/* Related posts section */}
          {relatedPosts.length > 0 ? <div className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                More {categoryInfo.name} Resources
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.slug} className="group relative">
                    <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      {relatedPost.imageUrl ? (
                        <img
                          src={relatedPost.imageUrl}
                          alt={relatedPost.title}
                          className="h-full w-full object-cover object-center"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <svg className="h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-gray-900">
                      <Link to={`/blog/${relatedPost.slug}`}>
                        <span className="absolute inset-0" />
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                      {relatedPost.excerpt || ''}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <Link 
                  to={`/blog?category=${post.category}`}
                  className="text-base font-semibold leading-7 text-indigo-600 hover:text-indigo-500"
                >
                  View all {categoryInfo.name} articles <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div> : null}
        </div>
      </div>
    </div>
  );
}

export const meta = ({ data }) => {
  if (!data) {
    return [
      { title: 'Post Not Found | Razor Hollow Blog' },
      { name: "description", content: "The requested blog post could not be found." },
    ];
  }
  
  const { post, categoryInfo } = data;
  return [
    { title: `${post.title} | ${categoryInfo.name} Resources | Razor Hollow` },
    { name: "description", content: post.excerpt || `Read about ${post.title} in our ${categoryInfo.name} resources.` },
    {
      tagName: "link",
      rel: "canonical",
      href: `https://www.razorhollow.com/blog/${post.slug}`
    },
  ];
};