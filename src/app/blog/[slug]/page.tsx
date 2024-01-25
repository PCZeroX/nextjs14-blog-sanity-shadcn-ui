import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { urlFor } from "@/lib/sanity";
import { getSlugData } from "@/data/sanity-data";

export const revalidate = 30; // revalidate at most 30 seconds

const BlogSlugPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getSlugData(params.slug);

  return (
    <section className="space-y-12">
      <h1 className="space-y-2">
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          PCZeroX - Blog
        </span>
        <span className="block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      {/* <div className="relative h-[420px] max-w-[720px] mx-auto"> */}
      <Image
        src={urlFor(data.titleImage).url()}
        alt={data.title}
        priority
        // fill
        width={720}
        height={420}
        // className="block rounded-lg border object-cover object-center w-full"
        className="mx-auto rounded-lg border object-cover object-center"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* </div> */}

      <div className="prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary mx-auto">
        <PortableText value={data.content} />
      </div>
    </section>
  );
};

export default BlogSlugPage;
