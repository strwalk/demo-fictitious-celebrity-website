import Link from 'next/link';

interface NewsItemProps {
  newsId: string;
  title: string;
  year: string;
  month: string;
  date: string;
}

const NewsItem = ({ newsId, title, year, month, date }: NewsItemProps) => {
  return (
    <li className="border-b border-slate-200">
      <Link
        href={`/news/${newsId}`}
        className="flex flex-wrap py-2 sm:py-4 hover:bg-slate-50 px-2"
      >
        <section className="w-20">
          {year}.{month}.{date}
        </section>
        <section>{title}</section>
      </Link>
    </li>
  );
};

export default function NewsList() {
  return (
    <main className="bg-green-light min-h-screen">
      <section className="flex justify-center pt-28 pb-20">
        <section className="max-w-screen-lg bg-white rounded-xl shadow-md w-full py-10 px-10 mx-5 sm:mx-10">
          <h1 className="text-center text-3xl">News</h1>
          <section>
            <ul>
              <NewsItem
                newsId="news1"
                title="初主演ドラマが決定"
                year="2023"
                month="4"
                date="1"
              />
              <NewsItem
                newsId="news2"
                title="握手会に来てください！"
                year="2023"
                month="3"
                date="1"
              />
              <NewsItem
                newsId="news3"
                title="写真集の発売が決定"
                year="2023"
                month="2"
                date="1"
              />
              <NewsItem
                newsId="news4"
                title="人気グッズの再販が決まりました"
                year="2023"
                month="1"
                date="1"
              />
              <NewsItem
                newsId="news5"
                title="バラエティ番組の司会に初挑戦"
                year="2022"
                month="12"
                date="1"
              />
              <NewsItem
                newsId="news6"
                title="サイン会があります"
                year="2022"
                month="11"
                date="1"
              />
            </ul>
          </section>
        </section>
      </section>
    </main>
  );
}
