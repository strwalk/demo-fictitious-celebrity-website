import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { AvatarSimple } from '../_components/avatar';
import { formatDateTimeInKanjiSeparator } from '../_utils';

interface Blog {
  id: string;
  title: string;
  contents: {
    text: string;
  };
  thumbnail?: {
    id: string;
    url: string;
  };
  createdAt: string;
}

interface BlogCardProps {
  href: string;
  title: string;
  imageSrc: string;
  contents: string;
  createdAt: string;
}

export const metadata: Metadata = {
  title: 'Blog List',
};

async function getBlogList() {
  const response = await fetch(`${process.env.HYGRAPH_ENDPOINT}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.PERMANENT_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query Blogs {
          blogs {
            id
            title
            contents {
              text
            }
            thumbnail {
              id
              url
            }
            createdAt
          }
        }
      `,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Blogs data');
  }

  const json = await response.json();
  return json.data.blogs;
}

const BlogCard = ({
  href,
  imageSrc,
  title,
  contents,
  createdAt,
}: BlogCardProps) => {
  return (
    <Link
      href={href}
      className="px-5 sm:px-8 pt-7 pb-6 bg-white rounded-md shadow hover:bg-gray"
    >
      <section className="flex justify-center">
        <Image
          src={imageSrc}
          width={300}
          height={300}
          alt={title}
          className="w-64 h-40 object-cover"
        />
      </section>
      <h2 className="mt-4 text-lg line-clamp-2">{title}</h2>
      <p className="text-xs mt-2 line-clamp-2 mb-4">
        {contents.replace(/\\n/g, '')}
      </p>
      <AvatarSimple
        size="extraSmall"
        date={formatDateTimeInKanjiSeparator(createdAt)}
      />
    </Link>
  );
};

export default async function BlogList() {
  const blogList: Blog[] = await getBlogList();

  return (
    <main className="bg-green-light min-h-screen">
      <section className="flex justify-center pt-24 pb-28">
        <section className="sm:w-[28rem] md:w-[70rem] px-4 sm:px-8">
          <h1 className="text-3xl text-center">Blog</h1>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
            {blogList.map((blog: Blog) => (
              <BlogCard
                key={blog.id}
                href={`/blogs/${blog.id}`}
                title={blog.title}
                imageSrc={blog.thumbnail?.url ?? '/images/plant.jpg'}
                contents={blog.contents.text}
                createdAt={blog.createdAt}
              />
            ))}
          </section>
        </section>
      </section>
    </main>
  );
}
