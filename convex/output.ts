
import { mutation, query } from './_generated/server';

export const insertOutput = mutation({

  handler: async (ctx, args) => {
    await ctx.db.insert('botReply', {
      output: args.output,
    });

    return 'Output inserted into the table successfully';
  },
});

export const getReply = query({
    handler:async (ctx)=>{
        return ctx.db.query('botReply').collect()
    }
})