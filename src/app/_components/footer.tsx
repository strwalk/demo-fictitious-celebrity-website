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
      </section>
    </footer>
  );
}
