import Link from 'next/link';

interface Props {
  size: Size;
  hasLink?: boolean;
}

export default function AvatarSimpleName({ size, hasLink = false }: Props) {
  const avatarName = '青星ヒカリ';
  const styles = size === 'extraSmall' ? 'text-xs' : 'text-sm';

  return hasLink ? (
    <Link href="/profile" className={styles}>
      {avatarName}
    </Link>
  ) : (
    <p className={styles}>{avatarName}</p>
  );
}
