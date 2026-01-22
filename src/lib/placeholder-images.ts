import data from './placeholder-images.json';
export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  genre?: string;
  name?: string;
  talent?: string;
  year?: string;
};
export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;