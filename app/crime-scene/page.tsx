import React, { Suspense } from 'react';
import { CrimeScene } from '../components/CrimeScene';
import { Loading } from '../components/Loading';

const page = () => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <CrimeScene />
      </Suspense>
    </main>
  );
};
export default page;
