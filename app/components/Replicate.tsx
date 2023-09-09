'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import axios from 'axios';
import Replicate from 'replicate';

type Inputs = {
  prompt: string;
};

export default function ReplicateForm() {
  const savePrompts = useMutation(api.prompts.savePrompt);
  // const LlamaData = useQuery(api.prompts.savePrompt);

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
    </div>
  );
}
