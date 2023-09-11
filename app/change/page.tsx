import React from 'react';
import { events } from '../components/seed';
import { SkeletonEvent } from '../components/SkeletonEvent';
import { Textarea } from '@/components/ui/textarea';

const Events = () => {
  return (
    <main>
      <div className="flex flex-col justify-center mx-auto max-w-[1080px]">
        <h1 className="text-4xl text-[#e3cf1d] font-bold text-center mb-5">
          Example Results & Suggestions...
        </h1>
        <p className="text-md text-[#e3cf1d] font-bold text-center mb-5">
          Enter A Scenario And We Will Generate Your Story And Image
        </p>
        <Textarea
          placeholder="Create Your Own Scenario. WHAT IF ..."
          className="my-10"
        />
        {/* <ReplicateForm /> */}
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
