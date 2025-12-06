import { SidebarTrigger } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import { Menu } from 'lucide-react'
import React from 'react'

function AppHeader() {
  return (
    <div className='flex justify-between items-center w-full p-4 border-b shadow bg-sidebar'>
<SidebarTrigger className="p-2 rounded-lg hover:bg-muted">
  <Menu className="h-5 w-5" />
</SidebarTrigger>
        <UserButton/>
    </div>
  )
}

export default AppHeader