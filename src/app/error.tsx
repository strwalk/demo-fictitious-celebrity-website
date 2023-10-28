'use client';

import { useEffect } from 'react';
import type { Metadata } from 'next';
import ScreenMoveButton from './_components/screen-move-button';

export const metadata: Metadata = {
  title: 'Error | Fictitious Website',
};

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-green-light min-h-screen flex items-center justify-center px-5 md:px-10">
      <section>
        <h1 className="text-2xl text-center">エラーが発生しました</h1>
        <section className="flex justify-center mt-8">
          <ScreenMoveButton href="/" title="トップページへ戻る" />
        </section>
      </section>
    </main>
  );
}
