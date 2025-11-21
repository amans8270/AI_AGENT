'use client'
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react';
import React, { Children, useEffect } from 'react'

function  Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const {user}=useUser();
    useEffect(()=>{
        user&&createAndGetUser();
    },[user]);
 
    const createUser=useMutation(api.user.CreateNewUser);
    const createAndGetUser=async()=>{
        if(user){
            await createUser({
                name:user.fullName||"No Name",
                email:user.primaryEmailAddress?.emailAddress??"No Email"
            });
        }
        console.log(user);
    }
  return (
    <div>{children}</div>
  )
}

export default Provider