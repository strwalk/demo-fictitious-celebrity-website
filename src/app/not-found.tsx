import type { Metadata } from 'next';
import ScreenMoveButton from './_components/screen-move-button';

export const metadata: Metadata = {
  title: 'Not Found | Fictitious Website',
};

export default function NotFound() {
  return (
    <main className="bg-green-light min-h-screen flex items-center justify-center px-5 md:px-10">
      <section>
        <section className="text-center">
          <h1 className="text-2xl">
            お探しのページは
            <br className="sm:hidden" />
            見つかりませんでした
          </h1>
          <p className="text-sm md:text-base mt-3">
            移動または削除された可能性があります
          </p>
        </section>
        <section className="flex justify-center mt-8">
          <ScreenMoveButton href="/" title="トップページへ戻る" />
        </section>
      </section>
    </main>
  );
}
