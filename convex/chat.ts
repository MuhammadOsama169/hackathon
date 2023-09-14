
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
          { role: "system", content: "Your name is Jervis. And you are being interrogated by a detective. You make avoid being caught but keep the detective intrested by having an open conversation. You only reply with one sentence reply and two sentence maximum if you want to create a fake alibi. But when user mentions the word 'knife or phone number or ID card ' you give up and say 'You Win Detective i am guilty!'" },
          { role: "user", content: prompt as string }
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










