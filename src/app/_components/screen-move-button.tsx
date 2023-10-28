import Link from 'next/link';
import { HiOutlineChevronLeft } from 'react-icons/hi';

interface Props {
  href: string;
  title: string;
  size?: 'normal' | 'big';
}

export default function ScreenMoveButton({
  href,
  title,
  size = 'normal',
}: Props) {
  const linkSize = size === 'big' ? 'px-10 py-3.5' : 'pl-6 pr-8 py-3';

  return (
    <Link
      href={href}
      className={`bg-green hover:bg-green-light text-white hover:text-black ${linkSize} text-center rounded shadow text-sm font-bold hover:font-normal flex items-center gap-2`}
    >
      <HiOutlineChevronLeft className="text-lg" />
      <span> {title}</span>
    </Link>
  );
}
