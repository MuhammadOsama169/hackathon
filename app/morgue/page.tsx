import React from 'react';
import { MorgueScene } from '../components/MorgueScene';
import MedicalForm from '../components/MedicalForm';

const page = () => {
  return (
    <main>
      <MorgueScene />
      <div className="absolute left-[350px] top-[540px]">
        <div className="rounded-lg mx-auto  overflow-y-auto ">
          <MedicalForm />
        </div>
      </div>
    </main>
  );
};

export default page;
