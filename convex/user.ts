import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser=mutation({
    args:{
        name:v.string(),
        email:v.string()
    },
    handler:async (ctx,args)=>{
        const user=await ctx.db.query('UserTable').filter(q=>q.eq(q.field('email'),args.email)).collect(); // Check if user already exists

        if(user?.length==0){
            const newUser=await ctx.db.insert('UserTable',{
                name:args.name,
                email:args.email,
                token:500
            });
            return newUser;
            }
            return user[0]; // Return existing user
        }})