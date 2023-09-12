import React from 'react';
import { events } from '../components/seed';
import { SkeletonEvent } from '../components/SkeletonEvent';

import ReplicateForm from '../components/Replicate';

const Events = () => {
  return (
    <main>
      <div className="flex flex-col justify-center mx-auto max-w-[1080px]">
        <ReplicateForm />
        <section className="grid grid-cols-3 gap-5 ">
          {events.map((scenario) => (
            <div key={scenario.id}>
              <SkeletonEvent scenario={scenario} />
            </div>
          ))}
        </section>

        <section className="my-10"></section>
      </div>
    </main>
  );
};
export default Events;
