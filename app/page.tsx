import Image from 'next/image';
import { Events } from './components/seed';
import detective from '../public/detective.jpg';
import Link from 'next/link';
import Video from './components/Video';
import { MainScreen } from './components/MainScreen';

export default function Home() {
  return (
    <>
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
              href="/crime"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full"
            >
              Go To Crime Scene
            </Link>

            <Link
              href="/change"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              Talk With Suspect
            </Link>
          </div>
          <Link
            href={'/api/auth/sign-in'}
            className="mt-1 rounded-b-xl text-white bg-gradient-to-br px-4 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm py-2.5 text-center mr-2 mb-2 w-full"
          >
            Sign In
          </Link>
        </div>
      </div>
      {/* <main className="flex justify-center mx-auto">
        <section className="md:max-w-[1080px] my-[100px]  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[50px] rounded-lg ">
          {Events?.map((event) => (
            <div key={event.id} className="relative hover:opacity-[0.85]">
              <Link href={`${event.id}`}>
                <Video
                  className="w-auto min-w-[300px] rounded-[40px] h-[500px] "
                  src={event.image}
                  type="video/mp4"
                />
                <div className="absolute bottom-10 left-0 mt-5 w-full text-white font-bold px-10 ">
                  <div className="text-2xl font-sans font-light mx-auto">
                    {event.title}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </main>
      <section className="flex mx-auto justify-center w-full mb-10">
        <div className="space-x-4">
          <Link
            href="/crime"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Go To Crime Scene
          </Link>
          <Link
            href="/room"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Talk With Suspect
          </Link>
        </div>
      </section> */}
    </>
  );
}
