import Link from 'next/link';

interface Props {
  href: string;
  title: string;
  size?: 'normal' | 'big';
  arrowDirection?: 'left' | 'right';
}

export default function ScreenMoveButton({
  href,
  title,
  size = 'normal',
  arrowDirection,
}: Props) {
  const linkSize =
    size === 'big' ? 'pl-10 pr-8 py-3 md:py-3.5' : 'pl-6 pr-8 py-3';

  return (
    <Link
      href={href}
      className={`bg-green hover:bg-green-light text-white hover:text-black ${linkSize} text-center rounded shadow text-sm font-bold hover:font-normal flex items-center gap-2`}
    >
      {arrowDirection === 'left' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <span>{title}</span>
      {arrowDirection === 'right' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </Link>
  );
}
