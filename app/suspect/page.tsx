import React, { Suspense } from 'react';
import SuspectForm from '../components/Suspect';
import { ThreeDimScene } from '../components/ThreeDimScene';
import { Loading } from '../components/Loading';

const Events = () => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <ThreeDimScene />
        <div className="absolute left-[257px] top-[550px]">
          <SuspectForm />
        </div>
      </Suspense>
    </main>
  );
};
export default Events;
