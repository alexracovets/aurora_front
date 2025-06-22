import { Gallery } from '@payload-types';

export async function getGalleryItem(slug: string): Promise<Gallery | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/gallery/${slug}`, {
      cache: 'no-store'
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data as Gallery;
  } catch (error) {
    console.error('Error fetching gallery item:', error);
    return null;
  }
} 