"use node";

import {  internalAction } from './_generated/server';
import { api } from './_generated/api';

import OpenAI from 'openai';
const apikey = process.env.OPENAI_API_KEY

const openai = new OpenAI({
  apiKey: apikey,
});

export const dalle = internalAction({
  handler: async (ctx, { prompt }: { prompt: string }) => {

    let image_url; 

    try {
      const response = await openai.images.generate({
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      });

      if (response && response.data && response.data[0] && response.data[0].url) {
        image_url = response.data[0].url;
        console.log('Image URL:', image_url);

        const result = await ctx.runMutation(api.dalleStore.insertOutput, {
            output:image_url,
          });
          console.log(result)
          return 'Dalle 2 executed successfully, and output inserted into the table.';

      } else {
        console.error('Invalid response structure:', response);
      }
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Failed to generate image');
    }
  },
});
