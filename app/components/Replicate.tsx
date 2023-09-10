'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

type Inputs = {
  prompt: string;
};

export default function ReplicateForm() {
  const savePrompts = useMutation(api.prompts.savePrompt);
  const replyList: any = useQuery(api.output.getReply);
  const [src, setSrc] = useState('');

  useEffect(() => {
    const blob = new Blob(
      [
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-DdfXSZSNqBl6NRSD3C8po3WC/user-VaoH9CKXVZGQOg9U9UeyHLn7/img-UDb1BxhqYzYYftlvCablpEOb.png?st=2023-09-10T06%3A50%3A10Z&se=2023-09-10T08%3A50%3A10Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-09-09T18%3A19%3A15Z&ske=2023-09-10T18%3A19%3A15Z&sks=b&skv=2021-08-06&sig=BJHEx%2Ba5jOHGtF89lfZR7ValEeZAi64bt2r8Xffw9qU%3D',
      ],
      { type: 'image/png' }
    );
    const img = URL.createObjectURL(blob);

    setSrc(img);
  }, []);

  const [data, setData] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <div className="container max-w-2xl mx-auto p-5">
      <Head>
        <title>Replicate + Next.js</title>
      </Head>

      <h1 className="py-6 text-center font-bold text-2xl">
        Dream something with
      </h1>

      <form
        onSubmit={handleSubmit((formData) => {
          savePrompts(formData);
        })}
      >
        <input {...register('prompt', { required: true })} />
        <input type="submit" />
      </form>
      {/* {replyList?.map((todo) => (
        <div key={todo._id}>
          <div>{todo.output}</div>
        </div>
      ))} */}

      {/* <img src={src} alt="name" /> */}
    </div>
  );
}
