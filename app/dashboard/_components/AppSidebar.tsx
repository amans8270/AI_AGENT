'use client'
import React, { useContext } from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Image from 'next/image'
import { Database, Gem, Headphones, LayoutDashboard, UserIcon, WalletCards } from 'lucide-react'
import Link from 'next/link'
import { UserDetailContext } from '@/context/UserDetailContext'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
 
const menuOptions = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'AI Agents',
    url: '#',
    icon: Headphones,
  },
   {
    title: 'Data',
    url: '#',
    icon: Database,
  },
  
   {
    title: 'Pricing',
    url: '#',
    icon: WalletCards,
  },
  
   {
    title: 'Profile',
    url: '#',
    icon: UserIcon,
  }

]

function AppSidebar() {
  const path=usePathname();
  const { open } = useSidebar();
   const {userDetail,setUserDetail}=useContext(UserDetailContext);
  return (

     <Sidebar collapsible='icon'>
      <SidebarHeader >
        <div className='flex gap-2 ites-center'>
        <Image src="/logo.svg" alt="Logo" width={35} height={35} />
        {open&&<h2 className='font-bold text-lg'>AI Agent</h2>}
        </div>
        </SidebarHeader>
        <SidebarGroupLabel><h3 className='text-lg font-bold '>APPLICATION</h3></SidebarGroupLabel>
      <SidebarContent>
        <SidebarGroup >
          <SidebarGroupContent>
            <SidebarMenu>
              {menuOptions.map((menu,index) => (
               <SidebarMenuItem key={index}>
                <SidebarMenuButton  isActive={path===menu.url} asChild size={open ? 'lg' : 'default'}>
                <Link href={menu.url}>
                <menu.icon />
                <span>{menu.title}</span>
                </Link>
                </SidebarMenuButton>
               </SidebarMenuItem>
            ))}
            
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
      </SidebarContent>
      <SidebarFooter className=' mb-2 ' >
        <div className='flex gap-2 item-center'>    
           <Gem/>
       {open && <h2 className='font-bold'>Remaining Credits {userDetail?.token}</h2>}
       </div>
           {open && <Button>Upgrade To Unlimited Credits</Button>}
        </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar