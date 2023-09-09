import AvatarIcon from '../avatar-icon';
import AvatarSimpleName from './avatar-simple-name';

interface Props {
  size: Size;
  date: string;
  hasLink?: boolean;
}

export default function AvatarSimple({ hasLink = false, date, size }: Props) {
  const flexGap = size === 'extraSmall' ? 'gap-1.5' : 'gap-3';

  return (
    <section className={`flex ${flexGap} items-end`}>
      <AvatarIcon hasLink={hasLink} size={size} />
      <section>
        <AvatarSimpleName hasLink={hasLink} size={size} />
        <p className="text-xs text-slate-400">{date}</p>
      </section>
    </section>
  );
}
