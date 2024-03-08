import React from 'react'
import { BellIcon } from "@heroicons/react/24/outline"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-2 bg-slate-50 shadow-lg">
      <h1 className="text-2xl font-semibold font-sans">Evaluation Dashboard</h1>
      <div className="space-x-3 flex items-center justify-between">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-md bg-slate-100 border-slate-200 border text-sm outline-none w-fit py-2 px-4"
        />
        <BellIcon className="w-10 h-10 rounded-full cursor-pointer p-2 hover:bg-slate-100" />
        <Avatar className='cursor-pointer'>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default Navbar