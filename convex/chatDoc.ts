
import {   internalAction } from './_generated/server';
import { api } from './_generated/api';
import OpenAI from "openai";

const apikey = process.env.OPENAI_API_KEY

const openai = new OpenAI({
  apiKey: apikey,
});

export const runDoc = internalAction({
  handler: async (ctx, { prompt }) => {
    try {

      const response = await openai.chat.completions.create({
        messages: [
          { role: "system", content: "Your a Medical Examinar.Your name is Bella. You answer question in 1 sentence. Examining a murder case. You help detective solve his case by answering any questio"},
          { role: "user", content: prompt as string }
        ],
        model: "gpt-3.5-turbo",
      });

      const output = response.choices[0]?.message?.content;

      console.log('ChatGPT output:', output);

      const result = await ctx.runMutation(api.outputDoc.insertOutput, {
        output,
      });

      console.log(result);

      return 'ChatGPT executed successfully, and output inserted into the table.';
    } catch (error) {
      console.error('Error running ChatGPT:', error);
      throw new Error('Failed to run ChatGPT');
    }
  },
});










