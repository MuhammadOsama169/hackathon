import {  internalMutation, mutation } from "./_generated/server";
import { internal } from "./_generated/api";

import { Id } from "./_generated/dataModel";

export const savePrompt = mutation(
    
    async ({db,scheduler},{prompt}:{prompt:string})=>{
       const Image = await db.insert('prompts',{
            prompt
        })

        await scheduler.runAfter(0, internal.generate.generate,{
            ImageId:Image,
            prompt
        })
        return {
            message:'success'
        }
    }
)


export const updateImage = internalMutation(async({db},{ImageId,result}:{ImageId:Id<string>; result:string })=>{
    console.log('id',ImageId)
    console.log('result',result)
    await db.patch(ImageId,{
        result
    })
})

