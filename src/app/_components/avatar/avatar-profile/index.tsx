import AvatarIcon from '../avatar-icon';
import SimpleProfile from '../../simple-profile';

export default function AvatarProfile() {
  return (
    <section className="flex gap-3 md:gap-5 items-center bg-gray py-3 px-3 sm:px-4">
      <section className="basis-36 sm:basis-auto flex justify-center">
        <AvatarIcon size="big" hasLink={true} />
      </section>
      <section className="basis-auto">
        <SimpleProfile />
      </section>
    </section>
  );
}
