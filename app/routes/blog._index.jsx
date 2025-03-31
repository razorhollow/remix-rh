import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { prisma } from '~/db.server';

export const loader = async () => {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      slug: true,
      title: true,
      excerpt: true,
      imageUrl: true,
      createdAt: true,
    },
  });

  return json({ posts });
};

export default function BlogIndex() {
  const { posts } = useLoaderData();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Razor Hollow Blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Insights, tips, and stories from the outdoor industry
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-200">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100">
                {post.imageUrl ? (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-200"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gray-100">
                    <svg className="h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="mt-6 flex flex-1 flex-col">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.createdAt} className="text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                    <Link to={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                </div>
                <div className="mt-6 flex items-center">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Read more <span aria-hidden="true">&rarr;</span>
                  </Link>
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