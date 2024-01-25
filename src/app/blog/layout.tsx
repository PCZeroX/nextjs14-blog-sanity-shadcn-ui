import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default BlogLayout;
