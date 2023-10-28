import type { Metadata } from 'next';
import Image from 'next/image';
import { profileName } from '../_constants';

interface ProfileType {
  information: string[];
  histories: string[];
}

export const metadata: Metadata = {
  title: 'Profile',
};

async function getProfile() {
  const response = await fetch(`${process.env.HYGRAPH_ENDPOINT}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.PERMANENT_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query Profiles {
          profiles {
            information
            histories
          }
        }
      `,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Profiles data');
  }

  const json = await response.json();
  return json.data.profiles[0];
}

export default async function Profile() {
  const profile: ProfileType = await getProfile();

  return (
    <main className="bg-green-light">
      <section className="pt-24 pb-28 flex justify-center">
        <section className="bg-white rounded-2xl shadow-md w-full max-w-[52rem] mx-4 sm:mx-8 py-16 flex justify-center px-5">
          <section>
            <h1 className="text-3xl text-center">Profile</h1>
            <section className="mt-5 flex justify-center">
              <Image
                src="/images/lion.jpeg"
                width={300}
                height={300}
                priority={true}
                alt="プロフィール画像"
                className="w-[26rem] md:w-[33rem] h-[15rem] md:h-[20rem] object-cover object-center md:object-right-top"
              />
            </section>
            <section className="flex flex-wrap gap-x-0.5 sm:gap-x-1 items-end mt-10">
              <h2 className="text-2xl sm:text-3xl">{profileName}</h2>
              <p>Hikari Aohoshi</p>
            </section>
            <ul className="mt-6 leading-7">
              {profile?.information?.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
            <ul className="mt-6 text-sm sm:text-base leading-7 sm:leading-7">
              {profile?.histories?.map((history, index) => (
                <li key={index}>{history}</li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </main>
  );
}
