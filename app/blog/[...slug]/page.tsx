import React from "react";
import { posts } from "#site/content";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import { MDXContent } from "@/components/mdx-component";
import "@/styles/mdx.css";
import { Post } from "@/velite.config";
import Link from "next/link";

async function getPostsFromParams(params: string) {
  const post = posts.find((i) => i.slugAsParams === params);
  return post;
}

function extractHeadingsFromJSX(code: string) {
  const headingRegex =
    /e\(r\.(h[2-4]),\s*\{\s*id:\s*"([^"]*)",\s*children:\s*"([^"]*)"\s*\}\)/g;
  const headings = [];

  let match;
  while ((match = headingRegex.exec(code)) !== null) {
    const tagName = match[1];
    const id = match[2];
    const text = match[3];
    headings.push({ tagName, id, text });
  }

  return headings;
}

const SinglePost = async ({ params }: { params: { slug: string[] } }) => {
  const data = await getPostsFromParams(params.slug.join("/"));

  if (!data?.published || !data) {
    notFound();
  }

  return (
    <main>
      <div className="bg-black flex flex-col items-center p-10 sm:p-16 justify-center bg-opacity-30">
        <p className="mb-5 text-sm p-2 px-5 rounded-full bg-white border-muted-foreground bg-opacity-10">
          {formatDate(data.date)}
        </p>
        <h1 className="text-center text-2xl sm:text-3xl capitalize font-semibold sm:w-[35ch]">
          {data.title}
        </h1>
      </div>
      <MaxWidthContainer className="flex sm:px-32 gap-10 py-10">
        <TableofContent data={data} />
        <main className="prose w-full sm:flex-1 dark:prose-invert">
          <MDXContent code={data.body} />
        </main>
      </MaxWidthContainer>
    </main>
  );
};

export default SinglePost;

const TableofContent = ({ data }: { data: Post }) => {
  const headings = extractHeadingsFromJSX(data?.body.toString()!);

  return (
    <>
      <div className="w-[250px] hidden sm:block">
        <p className="text-sm pb-5 mb-5 border-b">Table Of Content</p>
        <div className="flex gap-5 flex-col">
          {headings.map((post, index) => {
            const slug = "#" + post.text.toLowerCase().replace(/\s+/g, '-')
            return (
              <div key={index}>
                <Link  href={slug}>
                  {post.text}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
