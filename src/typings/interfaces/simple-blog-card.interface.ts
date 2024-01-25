import type { Image } from "sanity";

export interface ISimpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: Image;
}
