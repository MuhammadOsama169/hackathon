import {  mutation } from "./_generated/server";
import { internal } from "./_generated/api";

export const savePrompt = mutation(
    
    async ({db,scheduler},{prompt}:{prompt:string})=>{

        await db.insert('prompts',{
            prompt
        })

        await scheduler.runAfter(0, internal.chat.runLlama2,{
            prompt
        })

        return {
            message:'success'
        }
    }
)


