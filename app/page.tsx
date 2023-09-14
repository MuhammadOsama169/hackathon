import Image from 'next/image';
import { Events } from './components/seed';
import Link from 'next/link';
import Video from './components/Video';

export default function Home() {
  return (
    <>
      <main className="flex justify-center mx-auto">
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
      </section>
    </>
  );
}
