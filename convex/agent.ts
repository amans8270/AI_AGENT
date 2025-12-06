import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateAgent = mutation({
  args: {
    name: v.string(),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("AgentTable", {
      name: args.name,
      userId: args.userId,
      published: false,
    });
  },
});