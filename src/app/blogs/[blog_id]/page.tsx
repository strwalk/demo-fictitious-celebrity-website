import Image from 'next/image';
import { AvatarSimple, AvatarProfile } from '@/app/_components/avatar';

interface Params {
  params: {
    blog_id: string;
  };
}

export default function Blog({ params }: Params) {
  const blogId = params.blog_id;

  return (
    <main className="min-h-screen">
      <section className="flex justify-center pt-20 pb-24">
        <section>
          <section className="flex justify-center">
            <Image
              src="/images/candy.jpeg"
              width={300}
              height={300}
              alt="キャンディーの画像"
              priority={true}
              className="h-[18rem] w-[34rem] object-cover"
            />
          </section>
          <section className="sm:w-[28rem] md:w-[35rem] px-4">
            <h1 className="text-3xl font-bold mt-10 mb-4">
              動物園に行ってみた
            </h1>
            <AvatarSimple
              size="small"
              date="2023年4月1日 10:00"
              hasLink={true}
            />
            <section className="mt-10 mb-12">
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
            </section>
            <AvatarProfile />
          </section>
        </section>
      </section>
    </main>
  );
}
