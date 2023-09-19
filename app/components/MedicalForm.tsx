'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import iconGPT from '../../public/ai-logo.jpg';
import { speakFemale } from './speechUtils';
import { Input } from '@/components/ui/input';

type Inputs = {
  prompt: string;
};

export default function MedicalForm() {
  const savePrompts = useMutation(api.prompts.savePromptDoc);
  const replyList: any = useQuery(api.outputDoc.getReply);

  const firstReply =
    'Detective i found out after going through the evidence on the baseball bat and cigarette that the DNA belongs to a droid named RK800 Connor.';

  useEffect(() => {
    speakFemale(firstReply);
  }, []);

  // Fetch new replies from API
  const prevReply = useRef(null);
  useEffect(() => {
    if (replyList?.length > 0) {
      const newestReply = replyList.slice(-1)[0];
      if (newestReply && newestReply.output !== prevReply.current) {
        prevReply.current = newestReply.output;
        speakFemale(newestReply.output);
      }
    }
  }, [replyList]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  return (
    <div className="container max-w-[1080px]  relative">
      <form
        onSubmit={handleSubmit((formData) => {
          savePrompts(formData);
        })}
      >
        <div className="flex justify-center mx-auto ">
          <Input
            className="w-full text-lg text-center"
            placeholder="Hello Detective How May Can I Help You?"
            {...register('prompt', { required: true })}
          />
          <input
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            value="Ask"
          />
        </div>
      </form>

      <div className="border rounded-lg p-4 mx-auto h-[148px]  overflow-y-auto bg-[#000000]">
        {replyList
          ?.slice()
          .reverse()
          .map((todo: any) => (
            <div key={todo._id} className="mb-2">
              <div className="p-2 flex gap-2 rounded-lg">
                <Image src={iconGPT} alt="logo" className="w-auto h-[30px]" />
                {todo.output}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
