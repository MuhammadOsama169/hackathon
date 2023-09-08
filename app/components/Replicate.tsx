'use client';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

type Inputs = {
  prompt: string;
};

export default function ReplicateForm() {
  const savePrompts = useMutation(api.prompts.savePrompt);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch('/api/predictions', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       prompt: e.target.prompt.value,
  //     }),
  //   });
  //   let prediction = await response.json();
  //   if (response.status !== 201) {
  //     setError(prediction.detail);
  //     return;
  //   }
  //   setPrediction(prediction);

  //   while (
  //     prediction.status !== 'succeeded' &&
  //     prediction.status !== 'failed'
  //   ) {
  //     await sleep(1000);
  //     const response = await fetch('/api/predictions/' + prediction.id);
  //     prediction = await response.json();
  //     if (response.status !== 200) {
  //       setError(prediction.detail);
  //       return;
  //     }
  //     console.log({ prediction });
  //     setPrediction(prediction);
  //   }
  // };

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
    </div>
  );
}
