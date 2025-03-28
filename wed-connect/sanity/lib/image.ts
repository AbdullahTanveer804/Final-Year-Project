import createImageUrlBuilder from '@sanity/image-url'
import { client } from './client';
import { Image } from 'sanity';

const builder = createImageUrlBuilder(client)

export const urlForImage = (source: Image) => {
  return builder.image(source)
}
