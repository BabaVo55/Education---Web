import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* SearchBar */}
      <div className="hidden md:flex">
        <Image src='/search.png' alt='' width={14} height={14} />
        <input type="text" placeholder='Search' className='rounded-full p-2 ' />
      </div>
      {/* Icons & User */}
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
          <Image src='/message.png' alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
          <Image src='/announcement.png' alt="" width={20} height={20} />
        </div>
        <div className='flex flex-col'>
          <span>Ethem</span>
        </div>
      </div>
    </div>
  )
}
