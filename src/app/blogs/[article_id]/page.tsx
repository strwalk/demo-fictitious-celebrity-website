interface Params {
  params: {
    article_id: string;
  };
}

export default function Blog({ params }: Params) {
  const articleId = params.article_id;

  return (
    <main>
      <h1>ブログ記事</h1>
      <div>記事ID: {articleId}</div>
    </main>
  );
}
