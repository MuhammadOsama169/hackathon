'use client';
import { useState, useEffect, useRef } from 'react';
import { useToast } from '@/components/ui/use-toast';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Textarea } from '@/components/ui/textarea';
import logo from '../../public/logo.png';
import { speak } from './speechUtils';
import { Modal } from './Modal';

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
    <div className="container max-w-[1080px] mx-auto p-5 relative">
      {win === true && <Modal win={win} setWin={setWin} />}
      <form
        onSubmit={handleSubmit((formData) => {
          // savePrompts(formData);
          setData(formData);
        })}
      >
        <Textarea
          placeholder="Create Your Own Scenario. WHAT IF ..."
          className="my-5"
          {...register('prompt', { required: true })}
        />
        <input
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
          value="Submit"
          onClick={() => {
            toast({
              title: 'AI Is Generating....',
              description: 'Adding Finishing Touches!',
            });
          }}
        />
      </form>

      <div className="border rounded-lg p-4  mx-auto mt-4 h-[300px] overflow-y-auto">
        {replyList?.map((todo: any) => (
          <div key={todo._id} className="mb-2">
            <div className="p-2 flex gap-2 rounded-lg">
              <Image src={logo} alt="logo" className="w-auto h-[50px] " />
              {todo.output}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
