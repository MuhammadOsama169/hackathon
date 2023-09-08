'use node'
import { internalAction} from "./_generated/server";
import Replicate from "replicate";
import { Id } from "./_generated/dataModel";
import { internal } from "./_generated/api";


export const generate = internalAction( async(
    {runMutation},
    {prompt, ImageId}: {prompt:string; ImageId:Id<string>}  )=>{

        if (!process.env.REPLICATE_API_TOKEN) {
            throw new Error(
              "Add REPLICATE_API_TOKEN to your environment variables: " +
                "https://docs.convex.dev/production/environment-variables"
            );
          }
          const replicate = new Replicate({
            auth: process.env.REPLICATE_API_TOKEN,
          });

          console.log('running replicate')
          const output = await replicate.run(
            "ai-forever/kandinsky-2:601eea49d49003e6ea75a11527209c4f510a93e2112c969d548fbb45b9c4f19f",
            {
              input: {
                prompt: prompt,
              }
            }
          ) as [string,string]

          await runMutation(internal.prompts.updateImage,{
            ImageId,
            result:output[1]
          })
        console.log('hello world GG',{prompt, ImageId})
})