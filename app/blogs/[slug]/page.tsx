import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownContent from '@/components/markdown-content';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'public/blogs', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontMatter, content } = matter(fileContent);

  return (
    <article className="py-8">
      <h1 className="text-4xl font-bold mb-4">{frontMatter.title || slug}</h1>
      {frontMatter.date && (
        <p className="text-gray-400 mb-8">{frontMatter.date}</p>
      )}
<MarkdownContent content={content}/>
    </article>
  );
}