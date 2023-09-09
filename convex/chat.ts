
import Replicate from 'replicate';
import {  action, internalAction, mutation } from './_generated/server';
import { api, internal } from './_generated/api';

export const runLlama2 = internalAction({
  handler: async (ctx,{prompt}) => {
    // Initialize Replicate with your API token
    const replicate = new Replicate({
      auth: 'r8_L2I3XBJhKWwIM55dpotP54dQKyLOsNw0B1peC',
    });

    try {
      // Run Llama 2 with Replicate
      const output = await replicate.run(
        'meta/llama-2-70b-chat:2c1608e18606fad2812020dc541930f2d0495ce32eee50074220b87300bc16e1',
        {
          input: {
            prompt:prompt,
          },
        }
      );

     console.log('Llama 2 output:', output);

     const result = await ctx.runMutation(api.output.insertOutput, {
      output,
    });
    console.log(result)
    return 'Llama 2 executed successfully, and output inserted into the table.';
      
    } catch (error) {
      console.error('Error running Llama 2:', error);
      throw new Error('Failed to run Llama 2');
    }
  },
});










