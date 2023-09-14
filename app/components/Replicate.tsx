'use client';
import { useState, useEffect, useRef } from 'react';
import { useToast } from '@/components/ui/use-toast';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Textarea } from '@/components/ui/textarea';
import logo from '../../public/logo.png';
import { speak } from './speechUtils'; // Import the speech utility function

type Inputs = {
  prompt: string;
};

export default function ReplicateForm() {
  const savePrompts = useMutation(api.prompts.savePrompt);
  const replyList: any = useQuery(api.output.getReply);
  const replyDallE: any = useQuery(api.dalleStore.getDallE);
  const [src, setSrc] = useState([]);
  const [data, setData] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (replyDallE) {
      const imageUrlFromReply = replyDallE;
      setSrc(imageUrlFromReply);
    }
  }, [replyDallE]);

  const prevReply = useRef(null);

  useEffect(() => {
    // Check if replyList is defined and not empty
    if (replyList?.length > 0) {
      const newestReply = replyList.slice(-1)[0];

      // Check if newestReply is defined and different from the previous one
      if (newestReply && newestReply.output !== prevReply.current) {
        prevReply.current = newestReply.output;
        speak(newestReply.output);
      }
    }
  }, [replyList]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { prompt } = data;

  // if (
  //   typeof prompt === 'string' &&
  //   prompt.includes('shoe' || 'card' || 'name')
  // ) {
  //   console.log(`The prompt contains "shoe": ${prompt}`);
  // } else {
  //   console.log(`The prompt does not contain "Shoe": ${prompt}`);
  // }

  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <form
        onSubmit={handleSubmit((formData) => {
          savePrompts(formData);
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

      <div className="border rounded-lg p-4  mx-auto mt-4">
        {replyList?.map((todo: any) => (
          <div key={todo._id} className="mb-2">
            <div className="p-2 flex gap-2 rounded-lg">
              <Image src={logo} alt="logo" className="w-auto h-[50px] " />
              {todo.output}
            </div>
          </div>
        ))}
      </div>

      {src?.map((image: any) => (
        <div key={image?.id} className="w-200 h-100 border">
          <section className="cursor-pointer flex flex-col rounded-xl text-center justify-center p-4 hover:scale-[0.98] border-gray-300">
            <div className="h-auto mx-auto flex justify-center mb-10">
              <Image
                src={image?.output}
                width={400}
                height={100}
                alt="image"
                className=""
              />
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
