import Link from 'next/link';
import { profileName } from '../_constants';
import DropDownMenu from './drop-down-menu';

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
        <Link
          href="/"
          className="flex items-end flex-wrap gap-x-0.5 px-5 py-3 hover:bg-green-light"
        >
          <span className="text-xl">{profileName}</span>
          <span className="text-xs mb-1">Official Website</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex flex-wrap sm:text-lg">
            <MenuLink href="/" title="Top" />
            <MenuLink href="/news" title="News" />
            <MenuLink href="/profile" title="Profile" />
            <MenuLink href="/blogs" title="Blog" />
          </ul>
        </nav>
        <section className="md:hidden mr-3">
          <DropDownMenu />
        </section>
      </section>
    </header>
  );
}
