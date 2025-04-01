import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { prisma } from '~/db.server';
import { marked } from 'marked';

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

  return json({ post: { ...post, contentHtml } });
};

export default function BlogPost() {
  const { post } = useLoaderData();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h1>
          <time dateTime={post.createdAt} className="text-gray-500 mt-2 block">
            {new Date(post.createdAt).toLocaleDateString()}
          </time>
          
          {post.imageUrl ? <img
              src={post.imageUrl}
              alt={post.imageAlt || post.title}
              className="mt-8 aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
            /> : null}
          
          <div 
            className="prose prose-lg mt-10 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
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
  
  const { post } = data;
  return [
    { title: `${post.title} | Razor Hollow Blog` },
    { name: "description", content: post.excerpt || `Read ${post.title} on the Razor Hollow blog.` },
    {
      tagName: "link",
      rel: "canonical",
      href: `https://www.razorhollow.com/blog/${post.slug}`
    },
  ];
}; 