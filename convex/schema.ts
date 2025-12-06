import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    UserTable: defineTable({
        name: v.string(),
        email: v.string(),
        subscriber:v.optional(v.string()),
        token:v.number()
    }),
    AgentTable: defineTable({
        name: v.string(),
        userId: v.string(),
        config:v.optional(v.any()),
        published:v.boolean()
    }
            
        )
});