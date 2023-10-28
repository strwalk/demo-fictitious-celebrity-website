import { profileName } from '../_constants';

const copyrightYear = (): string => {
  const startYear = 2023;
  const thisYear = new Date().getFullYear();

  return startYear < thisYear ? `${startYear}-${thisYear}` : `${startYear}`;
};

export default function Footer() {
  return (
    <footer className="bg-gray py-2 sm:py-3 absolute bottom-0 w-screen">
      <section className="text-center">
        <small>
          &copy;{copyrightYear()} {profileName}
        </small>
        <p className="text-xs mt-1">
          これはデモ画面です。登場する人物・団体・名称等は架空であり、実在のものとは関係ありません
        </p>
      </section>
    </footer>
  );
}
