// Import necessary modules
import Replicate from 'replicate';
import {  internalAction, mutation } from './_generated/server';
import { internal } from './_generated/api';

// Define the action
export const runLlama2 = internalAction({
  handler: async ({},{prompt}) => {
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

     // Log the output to the console
     console.log('Llama 2 output:', output);

      // Return a success message

      return output;
      

    } catch (error) {
      // Handle any errors
      console.error('Error running Llama 2:', error);
      throw new Error('Failed to run Llama 2');
    }
    
  },
  
});









