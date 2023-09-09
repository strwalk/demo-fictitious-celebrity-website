import Link from 'next/link';
import { profileName } from '@/app/_constants';

interface Props {
  size: Size;
  hasLink?: boolean;
}

export default function AvatarSimpleName({ size, hasLink = false }: Props) {
  const styles = size === 'extraSmall' ? 'text-xs' : 'text-sm';

  return hasLink ? (
    <Link href="/profile" className={styles}>
      {profileName}
    </Link>
  ) : (
    <p className={styles}>{profileName}</p>
  );
}
