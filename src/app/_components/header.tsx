import Link from 'next/link';

interface MenuLinkProps {
  href: string;
  title: string;
}

const MenuLink = ({ href, title }: MenuLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        className="block py-3 w-16 sm:w-[5.2rem] text-center hover:bg-green-light"
      >
        {title}
      </Link>
    </li>
  );
};

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <section className="flex justify-between items-center">
        <Link href="/" className="block px-5 py-3 hover:bg-green-light">
          <span className="text-xl">青星ヒカリ</span>
          <span className="ml-[0.1rem] text-sm">Official Website</span>
        </Link>
        <nav>
          <ul className="flex flex-wrap sm:text-lg">
            <MenuLink href="/" title="Top" />
            <MenuLink href="/news" title="News" />
            <MenuLink href="/profile" title="Profile" />
            <MenuLink href="/blogs" title="Blog" />
          </ul>
        </nav>
      </section>
    </header>
  );
}
