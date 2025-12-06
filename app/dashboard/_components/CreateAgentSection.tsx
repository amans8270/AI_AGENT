'use client'
import { Button } from '@/components/ui/button'
import {  Plus } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { DialogClose } from '@radix-ui/react-dialog'
import { useState } from 'react'
import { mutation } from '@/convex/_generated/server'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'


function CreateAgentSection() {
  const CreateAgentMutation=useMutation(api.agent.CreateAgent);
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div className='space-y-2 justify-center items-center flex flex-col mt-10'>
        <h2 className='font-bold text-2xl'>CREATE AGENT</h2>
        <p className='text-lg'>Build an AI workflow with custom logic and tools</p>
       

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
  <DialogTrigger asChild > 
    <Button size='lg' onClick={() => setOpenDialog(true)}><Plus /> Create</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Enter Agent Name </DialogTitle>
      <DialogDescription>
       <Input placeholder='Agent Name' className='w-full mb-4 mt-2'/>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose>
        <Button variant="ghost">Cancel</Button>
      </DialogClose>
      <Button>Create</Button>

    </DialogFooter>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default CreateAgentSection