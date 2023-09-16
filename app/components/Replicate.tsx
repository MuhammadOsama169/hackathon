'use client';
import { useState, useEffect, useRef } from 'react';
import { useToast } from '@/components/ui/use-toast';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import IconGPT from '../../public/GPT-logo.jpg';
import { speak } from './speechUtils';
import { Modal } from './Modal';
import { Input } from '@/components/ui/input';

type Inputs = {
  prompt: string;
};

export default function ReplicateForm() {
  const savePrompts = useMutation(api.prompts.savePrompt);
  const replyList: any = useQuery(api.output.getReply);
  const [src, setSrc] = useState([]);
  const [data, setData] = useState<any>('');
  const { toast } = useToast();
  const [win, setWin] = useState<boolean>(false);

  console.log(data);
  // Fetch new replies from API
  const prevReply = useRef(null);
  useEffect(() => {
    if (replyList?.length > 0) {
      const newestReply = replyList.slice(-1)[0];
      if (newestReply && newestReply.output !== prevReply.current) {
        prevReply.current = newestReply.output;
        speak(newestReply.output);
      }
    }
  }, [replyList]);
  // text-speech logic
  const { prompt } = data;
  useEffect(() => {
    if (
      typeof prompt === 'string' &&
      (prompt.includes('shoe') ||
        prompt.includes('card') ||
        prompt.includes('name'))
    ) {
      setWin(true);
      console.log('win');
    } else {
      setWin(false);
      console.log('loose');
    }
  }, [prompt]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  return (
    <div className="container max-w-[1080px] mx-auto relative">
      {win === true && <Modal win={win} setWin={setWin} />}
      <form
        onSubmit={handleSubmit((formData) => {
          savePrompts(formData);
          setData(formData);
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
            onClick={() => {
              toast({
                title: 'AI Is Generating....',
                description: 'Adding Finishing Touches!',
              });
            }}
          />
        </div>
      </form>

      <div className="border rounded-lg p-4 mx-auto h-[228px] overflow-y-auto bg-[#000000]">
        {replyList
          ?.slice()
          .reverse()
          .map((todo: any) => (
            <div key={todo._id} className="mb-2">
              <div className="p-2 flex gap-2 rounded-lg">
                <Image src={IconGPT} alt="logo" className="w-auto h-[30px]" />
                {todo.output}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
