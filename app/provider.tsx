'use client'
import { UserDetailContext } from '@/context/UserDetailContext';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react';
import { useState } from 'react';
import React, { Children, useEffect } from 'react'

function  Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const {user}=useUser();
    const [userDetail, setUserDetail] = useState<any>(null);
    useEffect(()=>{
        user&&createAndGetUser();
    },[user]);
 
    const createUser=useMutation(api.user.CreateNewUser);
    const createAndGetUser=async()=>{
        if(user){
           const result = await createUser({
                name:user.fullName||"No Name",
                email:user.primaryEmailAddress?.emailAddress??"No Email"
            });
             console.log(result);
            setUserDetail(result);
        }

       
      
    }
  return (
    <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
    <div>{children}</div>
    </UserDetailContext.Provider>
  )
}

export default Provider

