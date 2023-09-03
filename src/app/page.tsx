import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative">
      <section className="relative h-screen">
        <Image
          src="/image-top.jpg"
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
    </main>
  );
}
