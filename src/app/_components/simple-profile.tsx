import { profileName } from '../_constants';

export default function SimpleProfile() {
  return (
    <span>
      <p>{profileName}</p>
      <p className="text-xs mt-1">
        2005年10月10日生まれ。大手芸能事務所所属のタレント
      </p>
      <p className="text-xs mt-1">世界で活躍するタレントを目標に日々奮闘中</p>
    </span>
  );
}
