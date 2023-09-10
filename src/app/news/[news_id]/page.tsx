import Link from 'next/link';
import {
  convertToAnArrayOfNewlineCodes,
  formatWithCommaSeparatedDates,
} from '@/app/_utils';

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
  const json = await response.json();
  return json.data.news;
}

export default async function NewsArticle({ params }: Params) {
  const newsId = params.news_id;
  const news: News = await getNewsArticle(newsId);

  return (
    <main className="bg-green-light min-h-screen">
      <section className="flex justify-center pt-20 pb-20">
        <section className="w-full max-w-screen-md mx-10">
          <section className="bg-white rounded-lg shadow-md px-16 pt-10 pb-6 mt-6">
            <h1 className="text-xl text-center border-b-[1.4px] border-green pb-2 px-1">
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
            <Link
              href="/news"
              className="bg-green hover:bg-gray text-white hover:text-black py-3 px-8 text-center rounded shadow text-sm font-bold hover:font-normal"
            >
              ニュース一覧に戻る
            </Link>
          </section>
        </section>
      </section>
    </main>
  );
}
