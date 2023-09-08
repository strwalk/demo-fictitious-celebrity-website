import Link from 'next/link';
import Image from 'next/image';

interface Params {
  params: {
    blog_id: string;
  };
}

export default function Blog({ params }: Params) {
  const blogId = params.blog_id;

  return (
    <main className="min-h-screen">
      <section className="flex justify-center pt-20 pb-20">
        <section>
          <section className="flex justify-center">
            <Image
              src="/images/candy.jpeg"
              width={300}
              height={300}
              alt="キャンディーの画像"
              className="h-[18rem] w-[34rem] object-cover"
            />
          </section>
          <section className="sm:w-[28rem] md:w-[35rem] px-4">
            <h1 className="text-3xl font-bold mt-10">動物園に行ってみた</h1>
            <section className="mt-4 flex gap-3 items-center">
              <Link href="/profile">
                <Image
                  src="/images/lion.jpeg"
                  width={50}
                  height={50}
                  alt="プロフィール画像"
                  className="w-12 h-12 object-cover rounded-full"
                />
              </Link>
              <section>
                <Link href="/profile" className="text-sm">
                  青星ヒカリ
                </Link>
                <p className="text-xs text-slate-400">2023年4月1日 10:00</p>
              </section>
            </section>
            <section className="mt-10">
              <p>最近気になっていた動物園に行ってみました</p>
              <h2 className="text-xl my-2 font-bold">1. ゾウのエリア</h2>
              <p>ゾウの鼻はとても長いです。</p>
              <p>
                ゾウの鼻はとても長いです。ゾウの鼻はとても長いです。ゾウの鼻はとても長いです。ゾウの鼻はとても長いです。ゾウの鼻はとても長いです。ゾウの鼻はとても長いです。ゾウの鼻はとても長いです。
              </p>
              <p>水浴びをしていました。</p>
              <h2 className="text-xl my-2 font-bold">2. キリンのエリア</h2>
              <p>キリンの首はとても長いです。</p>
              <p>キリンは黄色でした</p>
              <div>記事ID: {blogId}</div>
              <p className="mt-4 text-right text-sm text-gray-800">
                2023.04.01
              </p>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
