import type { Metadata } from 'next';
import Link from 'next/link';
import { formatWithCommaSeparatedDates } from '../_utils';

interface News {
  id: string;
  title: string;
  createdAt: string;
}

export const metadata: Metadata = {
  title: 'News List',
};

async function getNewsList() {
  const response = await fetch(`${process.env.HYGRAPH_ENDPOINT}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.PERMANENT_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query NewsList {
          newsList {
            id
            title
            createdAt
          }
        }
      `,
    }),
  });
  const json = await response.json();
  return json.data.newsList;
}

const NewsItem = ({ id, title, createdAt }: News) => {
  return (
    <li className="border-b first:border-t border-slate-200">
      <Link
        href={`/news/${id}`}
        className="grid grid-cols-1 md:grid-cols-6 gap-y-1 gap-x-5 hover:bg-slate-50 px-2 py-3 md:py-4"
      >
        <section className="text-xs md:text-base">
          {formatWithCommaSeparatedDates(createdAt)}
        </section>
        <section className="md:col-span-5">{title}</section>
      </Link>
    </li>
  );
};

export default async function NewsList() {
  const newsList: News[] = await getNewsList();

  return (
    <main className="bg-green-light min-h-screen">
      <section className="flex justify-center pt-24 pb-28">
        <section className="max-w-screen-lg bg-white rounded-xl shadow-md w-full py-10 px-4 sm:px-10 mx-5 sm:mx-10">
          <h1 className="text-center text-3xl">News</h1>
          <section className="mt-4">
            <ul>
              {newsList.map((news: News) => (
                <NewsItem
                  key={news.id}
                  id={news.id}
                  title={news.title}
                  createdAt={news.createdAt}
                />
              ))}
            </ul>
          </section>
        </section>
      </section>
    </main>
  );
}
