import Link from 'next/link';

interface Params {
  params: {
    news_id: string;
  };
}

export default function NewsArticle({ params }: Params) {
  const newsId = params.news_id;

  return (
    <main className="bg-green-light min-h-screen">
      <section className="flex justify-center pt-20 pb-20">
        <section className="w-full max-w-screen-md mx-10">
          <section className="bg-white rounded-lg shadow-md px-16 pt-10 pb-6 mt-6">
            <h1 className="text-xl text-center border-b-[1.4px] border-green pb-2 px-1">
              写真集の発売が決定
            </h1>
            <section className="mt-5 px-1">
              <p>この度、青星ヒカリの1st写真集の発売が決定しました！</p>
              <p>詳細につきましては、近日公開となります。</p>
              <p>ぜひ、チェックしてみてください。</p>
              <p>記事ID: {newsId}</p>
              <p className="mt-4 text-right text-sm text-gray-800">
                2023.04.01
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
