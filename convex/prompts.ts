import {  internalMutation, mutation } from "./_generated/server";
import { internal } from "./_generated/api";

import { Id } from "./_generated/dataModel";
import { v } from "convex/values";

// let initialBotResult = 'Making your timeline'; 

export const savePrompt = mutation(
    
    async ({db,scheduler},{prompt}:{prompt:string})=>{

        await db.insert('prompts',{
            prompt
        })
        //  await db.insert('bot',{
        //     result:initialBotResult
        // })

        await scheduler.runAfter(0, internal.chat.runLlama2,{
            prompt
        })

        return {
            message:'success'
        }
    }
)

// export const updateBot = internalMutation(async ({ db }, { result ,output}: { output: string; result:Id<string>  }) => {
//     console.log('result', result);
//     console.log('output', output);


//     await db.patch(result, {
//         result: output,
//       });
// });

