import Image from 'next/image';
import detective from '../public/detective.jpg';
import Link from 'next/link';
import { MainScreen } from './components/MainScreen';
import { Suspense } from 'react';
import { Loading } from './components/Loading';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <MainScreen />
        <div className="absolute top-[50%] left-[600px]">
          <div className="max-w-[354px] bg-[#020817] p-2 opacity-[0.9]">
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src={detective}
                  width={50}
                  height={50}
                  alt="detective"
                  className="w-[50px] h-[50px]"
                />
                <h1>Digital Deception</h1>
              </div>
              <div className="pt-1 text-red-600 font-bold">
                The AI Murder Mystery
              </div>
            </div>
            <div>
              <h3>
                Step into the shoes of a detective tasked with solving a
                high-stakes case involving an AI culprit. Interrogate,
                investigate, and uncover the truth to bring the rogue AI to
                justice
              </h3>
            </div>
          </div>
          <div className="mt-1 flex flex-col">
            <div>
              <Link
                href="/crime-scene"
                className="bg-[#e74645] hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full"
              >
                Go To Crime Scene
              </Link>

              <Link
                href="/suspect"
                className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
              >
                Talk With Suspect
              </Link>
            </div>
            <Link
              href="/morgue"
              className="mt-1 rounded-b-xl text-white bg-gradient-to-br px-4 from-[#1f306e] to-blue-500 hover:bg-gradient-to-bl  font-medium text-sm py-2.5 text-center mr-2 mb-2 w-full"
            >
              Speak With Medical Examiner
            </Link>
          </div>
        </div>
      </Suspense>
    </main>
  );
}
