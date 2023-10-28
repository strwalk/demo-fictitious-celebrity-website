import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import {
  convertToAnArrayOfNewlineCodes,
  formatWithCommaSeparatedDates,
} from '@/app/_utils';
import ScreenMoveButton from '@/app/_components/screen-move-button';

interface Params {
  params: {
    news_id: string;
  };
}

interface News {
  id: string;
  title: string;
  contents?: string;
  createdAt: string;
}

export const metadata: Metadata = {
  title: 'News',
};

async function getNewsArticle(newsId: string) {
  const response = await fetch(`${process.env.HYGRAPH_ENDPOINT}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.PERMANENT_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query News {
          news(where: {id: "${newsId}"}) {
            id
            title
            contents
            createdAt
          }
        }
      `,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch News data');
  }

  const json = await response.json();
  return json.data.news;
}

export default async function NewsArticle({ params }: Params) {
  const newsId = params.news_id;
  const news: News = await getNewsArticle(newsId);
  if (!news) {
    redirect('/not-found');
  }

  return (
    <main className="bg-green-light min-h-screen">
      <section className="flex justify-center pt-24 pb-28">
        <section className="w-full max-w-screen-md mx-5 md:mx-10">
          <section className="bg-white rounded-lg shadow-md px-4 sm:px-8 md:px-16 pt-10 pb-6 mt-6">
            <h1 className="text-lg sm:text-xl text-center border-b-[1.4px] border-green pb-2 px-1">
              {news.title}
            </h1>
            <section className="mt-5 px-1 leading-8">
              {news.contents &&
                convertToAnArrayOfNewlineCodes(news.contents).map(
                  (sentence: string, index: number) => (
                    <p key={index}>{sentence}</p>
                  )
                )}
              <p className="mt-4 text-right text-sm text-gray-800">
                {formatWithCommaSeparatedDates(news.createdAt)}
              </p>
            </section>
          </section>
          <section className="mt-10 flex justify-center">
            <ScreenMoveButton
              href="/news"
              title="ニュース一覧に戻る"
              arrowDirection="left"
            />
          </section>
        </section>
      </section>
    </main>
  );
}
