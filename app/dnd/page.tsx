'use client';
import React, { useState } from 'react';
import background from '../../public/background-dnd.jpg';
import Image from 'next/image';
import { Races, Classes } from '../components/seed';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

const DndCreationPage = () => {
  const [hoveredRace, setHovered] = useState(null);
  const [hoveredClass, setClass] = useState(null);
  const [selectedRace, setSelectedRace] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const dndPrompts = useMutation(api.dndprompts.dndPrompt);

  const handleSubmit = () => {
    const payload = { prompt: filterRace[0].race };
    console.log(payload);
    // dndPrompts(filterRace[0].race);
  };

  const handleRace = (id) => {
    setHovered(id);
    setSelectedRace(id);
  };
  const handleClass = (id) => {
    setClass(id);
    setSelectedClass(id);
  };

  const filterRace = Races.filter((races) => {
    return races.id === selectedRace;
  });
  const filterClass = Classes.filter((races) => {
    return races.id === selectedClass;
  });
  // console.log(filterRace, filterClass);

  return (
    <main className="flex justify-center mx-auto">
      <div className="absolute mt-2">
        <Image
          src={background}
          alt="Card Image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover "
        />
      </div>
      <section className="flex flex-col mt-20">
        <section className="flex gap-[400px] z-10 w-full h-auto mx-auto justify-between">
          {/* Race */}
          <div className="flex flex-col justify-start border-[#f4ac41] bg-[#100C0B] border-2 rounded-md ">
            <h1 className="text-2xl text-center my-2 font-">Races</h1>
            <div className="grid grid-cols-3 gap-5  p-5">
              {Races.map((race) => (
                <div
                  key={race.id}
                  onClick={() => handleRace(race.id)}
                  className={`border ${
                    selectedRace === race.id ? 'border-white' : 'border-black'
                  }`}
                >
                  <Image
                    src={race.image}
                    alt="races"
                    className="w-[100px] h-[100px] hover:scale-[0.95]"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>
            <div className="bg-[#100C0B] py-2">
              {Races.map((race) => (
                <div
                  key={race.id}
                  className=" max-w-[250px] text-center mx-auto"
                >
                  {race.id === hoveredRace && (
                    <div className="z-10 ">{race.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Class */}
          <div className="flex justify-end">
            {' '}
            <div className="flex flex-col  justify-start border-[#f4ac41] bg-[#100C0B]  border-2 rounded-md ">
              <h1 className="text-2xl text-center my-2 ">Class</h1>
              <div className="grid grid-cols-3 gap-5 p-5 ">
                {Classes.map((classes) => (
                  <div
                    key={classes.id}
                    onClick={() => handleClass(classes.id)}
                    className={`border ${
                      selectedClass === classes.id
                        ? 'border-white'
                        : 'border-black'
                    }`}
                  >
                    <Image
                      src={classes.image}
                      alt="races"
                      className="w-[100px] h-[100px] hover:scale-[0.95]"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                ))}
              </div>
              <div className="bg-[#100C0B] py-2">
                {Classes.map((classes) => (
                  <div
                    key={classes.id}
                    className=" max-w-[250px] text-center mx-auto"
                  >
                    {classes.id === hoveredClass && (
                      <div className="z-10 ">{classes.content}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center mx-auto">
          <button
            onClick={handleSubmit}
            type="button"
            className="z-50 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Create Your New Super Hero
          </button>
        </div>
      </section>
    </main>
  );
};
export default DndCreationPage;
