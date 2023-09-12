import Image from 'next/image';
import background from '../public/background.png';
import line from '../public/ezgif.com-crop.webp';
import { TableLogs } from './components/Table';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex justify-center mx-auto">
      <div className="absolute mt-5">
        <Image
          src={background}
          alt="Card Image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="absolute top-[317px] left-[462px] ">
        <Image
          src={line}
          alt="Card Image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[40vw] h-full object-cover "
        />
      </div>
      <section className="flex flex-col">
        <TableLogs />
        <div className=" text-white z-50 top-[560px] relative gap-5">
          <Link href={'/change'}>
            <button className="px-4 py-2 bg-[#e3411d] text-white rounded hover:bg-[#ffaa88] focus:outline-none focus:ring-2 focus:ring-[#ffaa88]">
              Create Your Own Story
            </button>
          </Link>
        </div>
      </section>

      <main className="flex min-h-screen flex-col items-center md:mt-10 mt-20 md:px-0 px-10"></main>
    </main>
  );
}
