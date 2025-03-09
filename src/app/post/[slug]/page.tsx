import { readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { readdir } from "fs/promises";

export async function generateStaticParams() {
  const files = await readdir(path.join(process.cwd(), "content"));
  return files.map((file) => ({
    params: {
      slug: file.replace(/\.md$/, ""),
    },
  }));
}

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostPage(props: PostPageProps) {
  const params = await props.params;
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);
  const fileContents = await readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(remarkHtml).process(content);
  const htmlContent = processedContent.toString();

  return (
    <div className="prose prose-slate mx-auto mt-48 max-w-2xl px-4">
      <h1>{data.title}</h1>
      <p>
        <small>
          {new Date(data.date).toLocaleDateString()} by {data.author}
        </small>
      </p>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
