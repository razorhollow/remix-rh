import { json } from '@remix-run/node';
import { Outlet, Form, Link, useLoaderData } from '@remix-run/react';
import { prisma } from '~/db.server';
import { useState } from 'react';
import ConfirmationDialog from '~/components/confirmation-dialog';
import { deleteImage } from '~/utils/cloudinary.server';

export const loader = async () => {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      slug: true,
      title: true,
      published: true,
      createdAt: true,
    },
  });
  
  return json({ posts });
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const action = formData.get('_action');
  
  if (action === 'delete') {
    const id = formData.get('id');
    
    // Get the post to check for image
    const post = await prisma.blogPost.findUnique({
      where: { id },
      select: { imageUrl: true }
    });
    
    // Delete image from Cloudinary if it exists
    if (post?.imageUrl) {
      try {
        await deleteImage(post.imageUrl);
      } catch (error) {
        console.error('Failed to delete image:', error);
        // Continue with post deletion even if image deletion fails
      }
    }
    
    // Delete the post
    await prisma.blogPost.delete({ where: { id } });
    return json({ success: true });
  }
  
  if (action === 'toggle-publish') {
    const id = formData.get('id');
    const post = await prisma.blogPost.findUnique({ where: { id } });
    await prisma.blogPost.update({
      where: { id },
      data: { published: !post.published },
    });
    return json({ success: true });
  }
  
  return json({ error: 'Invalid action' });
};

export default function DashboardBlog() {
  const { posts } = useLoaderData();
  const [deletePost, setDeletePost] = useState(null);
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Blog Posts</h1>
            <p className="mt-2 text-sm text-gray-700">Manage your blog posts</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link
              to="/dashboard/blog/new"
              className="inline-flex items-center rounded-md bg-goldenrod px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add post
            </Link>
          </div>
        </div>
        
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Title</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {posts.map((post) => (
                    <tr key={post.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        <Link to={`/dashboard/blog/${post.id}`} className="text-indigo-600 hover:text-indigo-900">
                          {post.title}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${post.published ? 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20' : 'bg-yellow-50 text-yellow-800 ring-1 ring-inset ring-yellow-600/20'}`}>
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <div className="flex space-x-3 justify-end">
                          <Form method="post">
                            <input type="hidden" name="id" value={post.id} />
                            <input type="hidden" name="_action" value="toggle-publish" />
                            <button
                              type="submit"
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              {post.published ? 'Unpublish' : 'Publish'}
                            </button>
                          </Form>
                          <Link to={`/dashboard/blog/${post.id}/edit`} className="text-indigo-600 hover:text-indigo-900">
                            Edit
                          </Link>
                          <button
                            type="button"
                            className="text-red-600 hover:text-red-900"
                            onClick={() => setDeletePost(post)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Outlet />

      {deletePost && (
        <ConfirmationDialog
          isOpen={!!deletePost}
          onClose={() => setDeletePost(null)}
          onConfirm={() => {
            const form = document.getElementById('delete-form');
            if (form) form.submit();
          }}
          title="Delete Blog Post"
          message={`Are you sure you want to delete "${deletePost.title}"? This action cannot be undone.`}
        />
      )}

      <Form id="delete-form" method="post">
        <input type="hidden" name="id" value={deletePost?.id} />
        <input type="hidden" name="_action" value="delete" />
      </Form>
    </div>
  );
}