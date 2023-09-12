'use client';
import Image from 'next/image';
import React from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

export const AIReply = () => {
  const replyList: any = useQuery(api.output.getReply);
  const replyDallE: any = useQuery(api.dalleStore.getDallE);

  const listData = replyList || [];
  const dallEData = replyDallE || [];

  const replies = [...listData, ...dallEData];
  console.log(replies);
  return <main></main>;
};
