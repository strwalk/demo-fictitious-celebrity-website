import Link from 'next/link';
import { formatWithCommaSeparatedDates } from '../_utils';

interface News {
  id: string;
  title: string;
  createdAt: string;
}

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
    <li className="border-b border-slate-200">
      <Link
        href={`/news/${id}`}
        className="flex flex-wrap py-2 sm:py-4 hover:bg-slate-50 px-2"
      >
        <section className="w-28">
          {formatWithCommaSeparatedDates(createdAt)}
        </section>
        <section>{title}</section>
      </Link>
    </li>
  );
};

export default async function NewsList() {
  const newsList: News[] = await getNewsList();

  return (
    <main className="bg-green-light min-h-screen">
      <section className="flex justify-center pt-28 pb-20">
        <section className="max-w-screen-lg bg-white rounded-xl shadow-md w-full py-10 px-10 mx-5 sm:mx-10">
          <h1 className="text-center text-3xl">News</h1>
          <section>
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
