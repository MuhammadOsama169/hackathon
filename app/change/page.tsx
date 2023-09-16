import React from 'react';
import ReplicateForm from '../components/Replicate';
import { ThreeDimScene } from '../components/ThreeDimScene';

const Events = () => {
  return (
    <main>
      <ThreeDimScene />
      <div className="absolute left-[257px] top-[550px]">
        <ReplicateForm />
      </div>
    </main>
  );
};
export default Events;
