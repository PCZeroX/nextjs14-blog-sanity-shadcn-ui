import type { Image } from "sanity";
import type { PortableTextBlock } from "@portabletext/types";

export interface ISimpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: Image;
}

export interface IFullBlog {
  currentSlug: string;
  title: string;
  content: PortableTextBlock;
  titleImage: Image;
}
