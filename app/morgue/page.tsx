import React, { Suspense } from 'react';
import { MorgueScene } from '../components/MorgueScene';
import MedicalForm from '../components/MedicalForm';
import { Loading } from '../components/Loading';

const page = () => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <MorgueScene />
        <div className="absolute left-[350px] top-[540px]">
          <div className="rounded-lg mx-auto  overflow-y-auto ">
            <MedicalForm />
          </div>
        </div>
      </Suspense>
    </main>
  );
};

export default page;
