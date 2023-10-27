import Image from 'next/image';
import { profileName } from '../_constants';

export default function Profile() {
  return (
    <main className="bg-green-light">
      <section className="pt-28 pb-20 flex justify-center px-5 sm:px-10 xl:px-20">
        <section className="bg-white rounded-2xl shadow-md w-full sm:mx-5 md:mx-10 lg:mx-20 px-5 sm:px-10 lg:px-5 py-16 flex justify-center">
          <section>
            <h1 className="text-3xl text-center">Profile</h1>
            <section className="mt-5 flex justify-center">
              <Image
                src="/images/lion.jpeg"
                width={580}
                height={580}
                priority={true}
                alt="プロフィール画像"
                className="w-[33rem] h-[20rem] object-cover object-center md:object-right-top"
              />
            </section>
            <section className="flex flex-wrap gap-x-1 items-end mt-10">
              <h2 className="text-3xl">{profileName}</h2>
              <p>Hikari Aohoshi</p>
            </section>
            <ul className="mt-6 leading-7">
              <li>生年月日：2005年10月10日</li>
              <li>出身地：東京都</li>
              <li>血液型：B型</li>
              <li>趣味：カフェ巡り、お菓子作り</li>
              <li>職業：タレント</li>
            </ul>
            <ul className="mt-6 text-sm sm:text-base leading-7 sm:leading-7">
              {/* eslint-disable no-irregular-whitespace */}
              <li>2000年　大手芸能事務所にスカウトされ、デビュー</li>
              <li>2005年　写真集「Light」を出版</li>
              <li>2002年　レギュラー番組「ブルーなStar」がスタート</li>
              <li>2020年　エッセイ本「Sirius」を出版</li>
              <li>2020年　ドラマ「universe」に出演</li>
              <li>2020年　若手新人女優賞を受賞</li>
              {/* eslint-disable no-irregular-whitespace */}
            </ul>
          </section>
        </section>
      </section>
    </main>
  );
}
