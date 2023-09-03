import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineChevronRight } from 'react-icons/hi';
import imageCoffee from '../../public/images/coffee.jpeg';
import imageSofa from '../../public/images/sofa.jpeg';
import imageFlower from '../../public/images/flower.jpeg';

interface DetailLinkProps {
  href: string;
  title: string;
}

const DetailLink = ({ href, title }: DetailLinkProps) => {
  return (
    <section className="mt-10 flex justify-center">
      <Link
        href={href}
        className="flex justify-center gap-2 items-center px-10 py-2.5 text-center rounded-md shadow bg-green text-white hover:bg-green-light hover:text-black"
      >
        <span className="text-lg">{title}</span>
        <HiOutlineChevronRight />
      </Link>
    </section>
  );
};

export default function Home() {
  return (
    <main className="relative">
      <section className="relative h-screen">
        <Image
          src="/images/top.jpg"
          fill={true}
          style={{ objectFit: 'cover' }}
          alt="植物の画像"
          className="z-[-1]"
        />
        <section className="relative top-40 sm:absolute sm:top-[40%] sm:left-[10%]">
          <h1 className="flex flex-col text-center">
            <span className="text-4xl md:text-6xl lg:text-7xl">青星ヒカリ</span>
            <span className="mt-1 md:mt-3 md:text-xl">Official Website</span>
          </h1>
        </section>
      </section>
      <section className="px-10">
        <section className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6 py-16">
          <section className="flex justify-center items-center">
            <section>
              <h2 className="text-4xl text-center">News</h2>
              <p className="mt-4">青星ヒカリの最新ニュースをお届け</p>
              <p>今後の予定や、メディア出演情報等を掲載しています</p>
              <DetailLink href="/news" title="ニュース一覧" />
            </section>
          </section>
          <section className="px-8 md:px-0">
            <Image src={imageCoffee} alt="コーヒーの画像" />
          </section>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6 py-16 bg-green-light">
          <section className="px-8 md:px-0">
            <Image src={imageSofa} alt="家具の画像" />
          </section>
          <section className="flex justify-center items-center">
            <section>
              <h2 className="text-4xl text-center">Profile</h2>
              <p className="mt-4">青星ヒカリのプロフィールや来歴はこちらから</p>
              <DetailLink href="/profile" title="プロフィール" />
            </section>
          </section>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6 py-16">
          <section className="flex justify-center items-center">
            <section>
              <h2 className="text-4xl text-center">Blog</h2>
              <p className="mt-4">青星ヒカリのブログを読む</p>
              <DetailLink href="/blogs" title="ブログ" />
            </section>
          </section>
          <section className="px-8 md:px-0">
            <Image src={imageFlower} alt="花束の画像" />
          </section>
        </section>
      </section>
    </main>
  );
}
