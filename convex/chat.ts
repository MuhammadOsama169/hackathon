
import {   internalAction } from './_generated/server';
import { api } from './_generated/api';
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: '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',
});

export const runLlama2 = internalAction({
  handler: async (ctx, { prompt }) => {
    try {

      const response = await openai.chat.completions.create({
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: prompt as string },
        ],
        model: "gpt-3.5-turbo",
      });

      const output = response.choices[0]?.message?.content;

      console.log('ChatGPT output:', output);

      const result = await ctx.runMutation(api.output.insertOutput, {
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










