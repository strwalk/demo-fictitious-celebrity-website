interface Params {
  params: {
    blog_id: string;
  };
}

export default function Blog({ params }: Params) {
  const blogId = params.blog_id;

  return (
    <main>
      <h1 className="mt-20">ブログ記事</h1>
      <div>記事ID: {blogId}</div>
    </main>
  );
}
