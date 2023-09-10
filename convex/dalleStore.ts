
import { mutation, query } from './_generated/server';

export const insertOutput = mutation({

    handler: async (ctx, args) => {
      await ctx.db.insert('dalleImg', {
        output: args.output,
      });
  
      return 'Output inserted into the table successfully';
    },
  });

//   export const getDalle = query(async (ctx) => {
//     const messages = await ctx.db.query("messages").collect();
//     for (const message of messages) {
//       if (message.format === "dall-e") {
//             // Replace the storage ID with a URL in the "body"
//         message.body = await ctx.storage.getUrl(message.body);
//       }
//     }
//     return messages;
//   });
  