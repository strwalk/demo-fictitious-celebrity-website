import { profileName } from '@/app/_constants';
import AvatarIcon from '../avatar-icon';

export default function AvatarProfile() {
  return (
    <section className="flex gap-3 md:gap-5 items-center bg-gray py-3 px-3 sm:px-4">
      <section className="basis-36 sm:basis-auto flex justify-center">
        <AvatarIcon size="big" hasLink={true} />
      </section>
      <section className="basis-auto">
        <p>{profileName}</p>
        <p className="text-xs mt-1">
          2005年10月10日生まれ。大手芸能事務所所属のタレント
        </p>
        <p className="text-xs mt-1">世界で活躍するタレントを目標に日々奮闘中</p>
      </section>
    </section>
  );
}
