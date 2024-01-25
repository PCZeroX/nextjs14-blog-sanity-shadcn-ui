import Link from "next/link";
import Image from "next/image";

import { urlFor } from "@/lib/sanity";

import { getBlogData } from "@/data/sanity-data";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const revalidate = 30; // revalidate at most 30 seconds

const HomePage = async () => {
  const data = await getBlogData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
      {data.map((post) => (
        <Card key={post.currentSlug} className="flex flex-col gap-y-4">
          <div className="relative h-[200px]">
            <Image
              src={urlFor(post.titleImage).url()}
              alt={"image card"}
              className="object-cover object-center rounded-t-lg"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <CardContent className="flex flex-col gap-y-4 flex-1">
            <h3 className="text-lg line-clamp-2 2xl:line-clamp-3 font-bold">
              {post.title}
            </h3>
            <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-300 flex-1">
              {post.smallDescription}
            </p>
            <Button asChild className="w-full">
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HomePage;
