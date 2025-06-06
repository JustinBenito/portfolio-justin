import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  frontMatter: {
    title?: string;
    date?: string;
    description?: string;
  };
}

export default function BlogsPage() {
  const blogDir = 'public/blogs';
  const files = fs.readdirSync(path.join(process.cwd(), blogDir));

  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), blogDir, filename),
      'utf-8'
    );
    const { data: frontMatter } = matter(fileContent);
    return {
      slug: filename.replace('.md', ''),
      frontMatter,
    };
  });

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog Posts</h1>
      <div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'>
        {posts.map((post: BlogPost) => (
          <Link
            href={`/blogs/${post.slug}`}
            key={post.slug}
            className="block p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {post.frontMatter.title || post.slug}
            </h2>
            {post.frontMatter.date && (
              <p className="text-sm text-gray-400 mb-2">{post.frontMatter.date}</p>
            )}
            {post.frontMatter.description && (
              <p className="text-gray-300">{post.frontMatter.description}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}