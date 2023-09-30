import Image from 'next/image';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { ElementNode } from '@graphcms/rich-text-types';
import { AvatarSimple, AvatarProfile } from '@/app/_components/avatar';
import { formatDateTimeInKanjiSeparator } from '@/app/_utils';

interface Params {
  params: {
    blog_id: string;
  };
}

interface Blog {
  id: string;
  title: string;
  contents?: {
    raw: {
      children: ElementNode[];
    };
  };
  thumbnail?: {
    id: string;
    url: string;
  };
  createdAt: string;
}

async function getBlogArticle(blogId: string) {
  const response = await fetch(`${process.env.HYGRAPH_ENDPOINT}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.PERMANENT_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query Blog {
          blog(where: {id: "${blogId}"}) {
            id
            title
            contents {
              raw
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
  const json = await response.json();
  return json.data.blog;
}

export default async function Blog({ params }: Params) {
  const blogId = params.blog_id;
  const blog: Blog = await getBlogArticle(blogId);

  return (
    <main className="min-h-screen">
      <section className="flex justify-center pt-20 pb-24">
        <section>
          <section className="flex justify-center">
            <Image
              src={blog.thumbnail?.url ?? ''}
              width={300}
              height={300}
              alt={blog.title}
              priority={true}
              className="h-[18rem] w-[34rem] object-cover"
            />
          </section>
          <section className="sm:w-[28rem] md:w-[35rem] px-4">
            <h1 className="text-3xl font-bold mt-10 mb-4">{blog.title}</h1>
            <AvatarSimple
              size="small"
              date={formatDateTimeInKanjiSeparator(blog.createdAt)}
              hasLink={true}
            />
            {blog.contents && (
              <section className="mt-10 mb-12">
                <RichText
                  content={blog.contents.raw}
                  renderers={{
                    h2: ({ children }) => (
                      <h2 className="text-xl font-bold mt-6 mb-2">
                        {children}
                      </h2>
                    ),
                    p: ({ children }) => (
                      <p className="leading-7">{children}</p>
                    ),
                  }}
                />
              </section>
            )}
            <AvatarProfile />
          </section>
        </section>
      </section>
    </main>
  );
}
