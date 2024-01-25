import { client } from "@/lib/sanity";

import {
  IFullBlog,
  ISimpleBlogCard,
} from "@/typings/interfaces/sanity.interface";

export const getBlogData = async (): Promise<ISimpleBlogCard[]> => {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
    }
  `;

  const data = await client.fetch(query);

  return data;
};

export const getSlugData = async (slug: string): Promise<IFullBlog> => {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
      "currentSlug": slug.current,
      title,
      content,
      titleImage
    }[0]
  `;

  const data = await client.fetch(query);

  return data;
};
