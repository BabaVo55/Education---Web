'use client';
import React from 'react'
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 106,
    // pv: 2400,
    fill: 'white',
  },
  {
    name: 'Male',
    count: 53,
    // pv: 2400,
    fill: '#f95959',
  },
  {
    name: 'Female',
    count: 53,
    // pv: 4567,
    fill: '#455d7a',
  }
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };

export default function CountChart({count, gender}:{count:number, gender:boolean}) {
  const genderResult = gender ? 'male' : 'female'
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* TITLE */}
        <div className="flex justify-between item-center">
            <h1 className='text-large font-semibold '>Student</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        {/* CHART */}
        <div className="w-full h-[75%] relative">
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={20} data={data}>
                  <RadialBar
                    label={{ position: 'insideStart', fill: '#fff' }}
                    background
                    dataKey="count"
                    
                    // clockWise
                    // minAngle={60}
                  />
                  {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
                </RadialBarChart>
            </ResponsiveContainer>

            <Image src='/maleFemale.png' alt='' height={50} width={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
        </div>
        {/* BOTTOM */}
        <div className="flex justify-center gap-16">
            <div className='flex flex-col gap-1'>
                <div className="w-5 h-5 bg-ethemNavy rounded-full"></div>
                <h1 className='font-bold'>{count}</h1>
                <h2 className='text-xs text-gray-500'>{genderResult}(55%)</h2>
            </div>
            <div className='flex flex-col gap-1'>
                <div className="w-5 h-5 bg-ethemRed rounded-full"></div>
                <h1 className='font-bold'>{count}</h1>
                <h2 className='text-xs text-gray-500'>{genderResult}(55%)</h2>
            </div>
        </div>
    </div>
  )
}
