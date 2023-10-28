import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { ElementNode } from '@graphcms/rich-text-types';
import { AvatarSimple, AvatarProfile } from '@/app/_components/avatar';
import { formatDateTimeInKanjiSeparator } from '@/app/_utils';
import ScreenMoveButton from '@/app/_components/screen-move-button';

interface Params {
  params: {
    blog_id: string;
  };
}

interface BlogArticle {
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

export const metadata: Metadata = {
  title: 'Blog',
};

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

  if (!response.ok) {
    throw new Error('Failed to fetch Blog data');
  }

  const json = await response.json();
  return json.data.blog;
}

export default async function Blog({ params }: Params) {
  const blogId = params.blog_id;
  const blog: BlogArticle = await getBlogArticle(blogId);
  if (!blog) {
    redirect('/not-found');
  }

  return (
    <main className="min-h-screen">
      <section className="flex justify-center pt-20 pb-28">
        <section>
          <section className="flex justify-center">
            <Image
              src={blog.thumbnail?.url ?? ''}
              width={300}
              height={300}
              alt={blog.title}
              priority={true}
              className="h-[14rem] sm:h-[18rem] w-[28rem] sm:w-[34rem] object-cover"
            />
          </section>
          <section className="w-full md:w-[35rem] px-8">
            <h1 className="text-3xl font-bold mt-10 mb-4">{blog.title}</h1>
            <AvatarSimple
              size="small"
              date={formatDateTimeInKanjiSeparator(blog.createdAt)}
              hasLink={true}
              hasTooltip={true}
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
                    p: ({ children }: any) =>
                      children?.props.content[0].text ? (
                        <p className="leading-7">{children}</p>
                      ) : (
                        <br />
                      ),
                    ol: ({ children }) => (
                      <ol className="list-decimal leading-7 ml-6">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="pl-1.5">{children}</li>
                    ),
                  }}
                />
              </section>
            )}
            <AvatarProfile />
            <section className="mt-8 md:mt-10 flex justify-center">
              <ScreenMoveButton href="/blogs" title="ブログ一覧に戻る" />
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
