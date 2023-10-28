import Link from 'next/link';
import { HiOutlineChevronLeft } from 'react-icons/hi';

interface Props {
  href: string;
  title: string;
}

export default function ScreenMoveButton({ title, href }: Props) {
  return (
    <Link
      href={href}
      className="bg-green hover:bg-gray text-white hover:text-black py-3 pl-6 pr-8 text-center rounded shadow text-sm font-bold hover:font-normal flex items-center gap-2"
    >
      <HiOutlineChevronLeft className="text-lg" />
      <span> {title}</span>
    </Link>
  );
}
