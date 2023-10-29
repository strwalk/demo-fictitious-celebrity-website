import type { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';
import imageCoffee from '../../public/images/coffee.jpeg';
import imageSofa from '../../public/images/sofa.jpeg';
import imageFlower from '../../public/images/flower.jpeg';
import { profileName } from './_constants';
import ScreenMoveButton from './_components/screen-move-button';

interface ImagesProps {
  src: StaticImageData;
  alt: string;
}

interface DetailLinkProps {
  href: string;
  title: string;
}

export const metadata: Metadata = {
  title: 'Top | Fictitious Website',
};

const ContentsImage = ({ src, alt }: ImagesProps) => {
  return (
    <section className="px-8 md:px-0">
      <Image src={src} alt={alt} />
    </section>
  );
};

const DetailLink = ({ href, title }: DetailLinkProps) => {
  return (
    <section className="mt-10 flex justify-center">
      <ScreenMoveButton
        href={href}
        title={title}
        size="big"
        arrowDirection="right"
      />
    </section>
  );
};

export default function Home() {
  return (
    <main className="relative">
      <section className="relative h-screen">
        <Image
          src="/images/plant.jpg"
          fill={true}
          priority={true}
          alt="植物の画像"
          className="object-cover z-[-1] object-[41%_top] sm:object-left-top lg:object-right-top xl:object-center"
        />
        <section className="relative top-40 sm:absolute sm:top-[40%] sm:left-[10%]">
          <h1 className="flex flex-col text-center">
            <span className="text-5xl sm:text-6xl lg:text-7xl">
              {profileName}
            </span>
            <span className="mt-1 md:mt-3 md:text-xl">Official Website</span>
          </h1>
        </section>
      </section>
      <section className="md:px-10 pb-10">
        <section className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6 py-16 px-8">
          <section className="flex justify-center items-center">
            <section>
              <h2 className="text-4xl text-center">News</h2>
              <p className="mt-4">{profileName}の最新ニュースをお届け</p>
              <p>今後の予定や、メディア出演情報等を掲載しています</p>
              <DetailLink href="/news" title="ニュース一覧" />
            </section>
          </section>
          <ContentsImage src={imageCoffee} alt="コーヒーの画像" />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6 py-16 px-8 bg-green-light">
          <ContentsImage src={imageSofa} alt="imageSofa" />
          <section className="flex justify-center items-center">
            <section>
              <h2 className="text-4xl text-center">Profile</h2>
              <p className="mt-4">
                {profileName}のプロフィールや来歴はこちらから
              </p>
              <DetailLink href="/profile" title="プロフィール" />
            </section>
          </section>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6 py-16 px-8">
          <section className="flex justify-center items-center">
            <section>
              <h2 className="text-4xl text-center">Blog</h2>
              <p className="mt-4">{profileName}のブログを読む</p>
              <DetailLink href="/blogs" title="ブログ" />
            </section>
          </section>
          <ContentsImage src={imageFlower} alt="花束の画像" />
        </section>
      </section>
    </main>
  );
}
