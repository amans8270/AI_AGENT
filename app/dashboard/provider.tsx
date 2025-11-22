import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import App from 'next/app'
import React from 'react'
import AppSidebar from './_components/AppSidebar'


function DashboardProvider({children}:any) {
  return (
    <SidebarProvider>
    <AppSidebar />
    <SidebarTrigger />
    <div> {children} </div> </SidebarProvider>
  )
}

export default DashboardProvider