import React from 'react';
import SuspectForm from '../components/Suspect';
import { ThreeDimScene } from '../components/ThreeDimScene';

const Events = () => {
  return (
    <main>
      <ThreeDimScene />
      <div className="absolute left-[257px] top-[550px]">
        <SuspectForm />
      </div>
    </main>
  );
};
export default Events;
