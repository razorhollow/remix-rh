import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(buffer) {
  try {
    if (!buffer || !Buffer.isBuffer(buffer)) {
      throw new Error('Invalid buffer provided');
    }

    const uploadResponse = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: 'blog-images',
          resource_type: 'auto',
        },
        (error, result) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        }
      ).end(buffer);
    });

    return uploadResponse.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error('Failed to upload image to Cloudinary');
  }
}

export async function deleteImage(imageUrl) {
  try {
    // Extract public_id from the URL
    const publicId = imageUrl.split('/').slice(-1)[0].split('.')[0];
    await cloudinary.uploader.destroy(`blog-images/${publicId}`);
  } catch (error) {
    console.error('Cloudinary delete error:', error);
    throw new Error('Failed to delete image from Cloudinary');
  }
} 