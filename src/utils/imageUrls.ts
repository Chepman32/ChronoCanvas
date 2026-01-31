// Curated collection of high-quality Unsplash images for different themes

export const imageCollections = {
  scifi: [
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
    'https://images.unsplash.com/photo-1506744038136-d7ce7daaed5b?w=800',
  ],
  ocean: [
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800',
    'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=800',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
    'https://images.unsplash.com/photo-1501854140801-8ab4360f7e85?w=800',
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800',
  ],
  horror: [
    'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
    'https://images.unsplash.com/photo-1506905925346-21b6c50f1e71?w=800',
    'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800',
  ],
  nature: [
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    'https://images.unsplash.com/photo-1501854140801-8ab4360f7e85?w=800',
    'https://images.unsplash.com/photo-1501785888041-47e9e56c4ed1?w=800',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
  ],
  urban: [
    'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
    'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=800',
    'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=800',
    'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800',
  ],
  ancient: [
    'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
    'https://images.unsplash.com/photo-1501785888041-47e9e56c4ed1?w=800',
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
    'https://images.unsplash.com/photo-1506905925346-21b6c50f1e71?w=800',
  ],
  medieval: [
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
    'https://images.unsplash.com/photo-1501785888041-47e9e56c4ed1?w=800',
    'https://images.unsplash.com/photo-1506905925346-21b6c50f1e71?w=800',
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
  ],
};

// Fallback image for when others fail to load
export const fallbackImage =
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800';

// Get image for a specific index with better distribution
export const getImageForNode = (images: string[], index: number): string => {
  if (!images || images.length === 0) return fallbackImage;
  return images[index % images.length] || fallbackImage;
};
