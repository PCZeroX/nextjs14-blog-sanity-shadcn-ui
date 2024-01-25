import { client } from "@/lib/sanity";
import { ISimpleBlogCard } from "@/typings/interfaces/simple-blog-card.interface";

export const getData = async (): Promise<ISimpleBlogCard[]> => {
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
