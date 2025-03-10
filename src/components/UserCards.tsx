import React from 'react'
import Image from 'next/image'
export default function UserCards({type, numba}:{type:string, numba:number}) {
  return (
    <div className='rounded-xl odd:bg-ethemPurple even:bg-ethemYellow p-4 flex-1 '>
      <div className='flex justify-between items-center'>
        <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600'>2024/2025</span>
        <Image src='/more.png' alt="" width={20} height={20} />
      </div>
      <h1 className='text-2xl font-semibold my-4'>{numba}</h1>
      <h1 className='capitalize text-sm font-medium text-gray-500'>{type}</h1>
    </div>
  )
}
