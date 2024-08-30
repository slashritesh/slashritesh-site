import React from "react";
import { posts } from "#site/content";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

const Blog = () => {
  const data = posts.filter((i) => i.published === true);
  return (
    <MaxWidthContainer className="sm:py-10 grid sm:grid-cols-4 ">
      {data.map((post, index) => {
        return (
          <div key={index} className="p-5 max-w-96">
            <div className="bg-gradient-to-tl opacity-40 from-slate-900 to-blue-900 h-[200px] w-auto rounded-xl">
              {/* TODO:Image add headimage */}
            </div>
            <h3 className="text-lg w-fit leading-tight font-medium mt-5">
              {post.title}
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-muted-foreground text-sm">{formatDate(post.date)}</p>
              <Link className={buttonVariants({variant:"link"})} href={`/blog/${post.slugAsParams}`}>Read More</Link>
            </div>
          </div>
        );
      })}
    </MaxWidthContainer>
  );
}; 

export default Blog;
