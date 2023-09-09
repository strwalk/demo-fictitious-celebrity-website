import Link from 'next/link';
import Image from 'next/image';

interface AvatarIconImageProps {
  size: Size;
}

interface Props extends AvatarIconImageProps {
  hasLink?: boolean;
}

const iconSize = (size: Size) => {
  const sizeList = {
    extraSmall: 'w-8 h-8',
    small: 'w-11 h-11',
    big: 'w-20 h-20',
  };
  return sizeList[size];
};

const AvatarIconImage = ({ size }: AvatarIconImageProps) => {
  return (
    <Image
      src="/images/lion.jpeg"
      width={50}
      height={50}
      alt="プロフィール画像"
      className={`${iconSize(size)} object-cover rounded-full`}
    />
  );
};

export default function AvatarIcon({ hasLink, size }: Props) {
  return hasLink ? (
    <Link href="/profile">
      <AvatarIconImage size={size} />
    </Link>
  ) : (
    <AvatarIconImage size={size} />
  );
}
