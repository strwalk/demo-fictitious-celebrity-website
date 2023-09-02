import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="mx-10">
        <h1>トップ</h1>
        <nav className="mt-10">
          <ul className="grid grid-cols-3 gap-10">
            <li className="bg-blue-200 py-3 text-center rounded-lg">
              <Link href="/profile">プロフィール</Link>
            </li>
            <li className="bg-blue-200 py-3 text-center rounded-lg">
              <Link href="/news">ニュース</Link>
            </li>
            <li className="bg-blue-200 py-3 text-center rounded-lg">
              <Link href="/blogs">ブログ</Link>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
