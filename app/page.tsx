import { Choices } from './components/Choices';
import ReplicateForm from './components/Replicate';
import Image from 'next/image';
import line3 from '../public/Group 2172.png';
import line from '../public/ezgif.com-crop.webp';
import { TableLogs } from './components/Table';

export default function Home() {
  return (
    <main className="flex justify-center mx-auto">
      <div className="absolute mt-5">
        <Image
          src={line3}
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
      <TableLogs />
      <main className="flex min-h-screen flex-col items-center md:mt-10 mt-20 md:px-0 px-10">
        {/* <ReplicateForm /> */}
      </main>
    </main>
  );
}
