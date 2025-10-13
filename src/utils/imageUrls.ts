// Curated collection of high-quality Unsplash images for different themes

export const imageCollections = {
  scifi: [
    'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800',
    'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800',
    'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
  ],
  ocean: [
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    'https://images.unsplash.com/photo-1682687220742-aba13b6e50c5?w=800',
    'https://images.unsplash.com/photo-1682687221038-404670f09ef1?w=800',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
    'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800',
    'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800',
  ],
  horror: [
    'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
    'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=800',
    'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800',
  ],
  nature: [
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800',
    'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
  ],
  urban: [
    'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
    'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=800',
    'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=800',
    'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800',
  ],
  ancient: [
    'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800',
    'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800',
    'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800',
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
    'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=800',
  ],
  medieval: [
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
    'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800',
    'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=800',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
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
