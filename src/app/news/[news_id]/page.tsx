interface Params {
  params: {
    news_id: string;
  };
}

export default function NewsArticle({ params }: Params) {
  const newsId = params.news_id;

  return (
    <main>
      <h1 className="mt-20">ニュース記事</h1>
      <div>記事ID: {newsId}</div>
    </main>
  );
}
