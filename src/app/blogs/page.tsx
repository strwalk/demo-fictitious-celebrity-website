import Link from 'next/link';
import Image from 'next/image';

interface BlogCard {
  href: string;
  imageSrc: string;
  title: string;
  description: string;
}

const BlogCard = ({ href, imageSrc, title, description }: BlogCard) => {
  return (
    <Link
      href={href}
      className="px-8 pt-7 pb-6 bg-white rounded-md shadow hover:bg-gray"
    >
      <section className="flex justify-center">
        <Image
          src={imageSrc}
          width={300}
          height={300}
          alt={title}
          className="w-64 h-40 object-cover"
        />
      </section>
      <h2 className="mt-4 text-lg line-clamp-2">{title}</h2>
      <p className="text-xs mt-2 line-clamp-2">{description}</p>
    </Link>
  );
};

export default function BlogList() {
  return (
    <main className="bg-green-light min-h-screen">
      <section className="flex justify-center pt-24 pb-20">
        <section className="sm:w-[28rem] md:w-[70rem] px-8">
          <h1 className="text-3xl text-center">Blog</h1>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
            <BlogCard
              href="/blogs/blog1"
              imageSrc="/images/sofa.jpeg"
              title="家具の歴史"
              description="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
            />
            <BlogCard
              href="/blogs/blog2"
              imageSrc="/images/coffee.jpeg"
              title="おいしいコーヒーの淹れ方"
              description="テキストテキスト"
            />
            <BlogCard
              href="/blogs/blog3"
              imageSrc="/images/lion.jpeg"
              title="動物園に行ってみた"
              description="テキストテキスト"
            />
            <BlogCard
              href="/blogs/blog4"
              imageSrc="/images/flower.jpeg"
              title="母の日のプレゼント"
              description="テキストテキスト"
            />
            <BlogCard
              href="/blogs/blog5"
              imageSrc="/images/top.jpg"
              title="一日何回水をあげる？"
              description="テキストテキスト"
            />
          </section>
        </section>
      </section>
    </main>
  );
}
