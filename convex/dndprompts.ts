import {  mutation } from "./_generated/server";
import { internal } from "./_generated/api";

export const dndPrompt = mutation(
    
    async ({db,scheduler},{prompt}:{prompt:string})=>{

        await db.insert('dndPrompts',{
            prompt
        })


        return {
            message:'success'
        }
    }
)


