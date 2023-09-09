import AvatarIcon from '../avatar-icon';

export default function AvatarProfile() {
  return (
    <section className="flex gap-5 items-center bg-gray py-3 px-4">
      <AvatarIcon size="big" hasLink={true} />
      <section>
        <p>青星ヒカリ</p>
        <p className="text-xs mt-1">
          2005年10月10日生まれ。大手芸能事務所所属のタレント
        </p>
        <p className="text-xs mt-1">世界で活躍するタレントを目標に日々奮闘中</p>
      </section>
    </section>
  );
}
