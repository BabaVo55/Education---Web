'use client';
import Image from 'next/image';
import React from 'react';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'Monday',
    present: 20,
    absent: 22,

  },
  {
    name: 'Tuesday',
    present: 40,
    absent: 15,
    
  },
  {
    name: 'Wednesday',
    present: 62,
    absent: 52,
    
  },
  {
    name: 'Thursday',
    present: 99,
    absent: 23,
    
  },
  {
    name: 'Friday',
    present: 17,
    absent: 82,
   
  },

];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

export default function AttendanceChart() {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className='flex align-center justify-between'>
            <h1 className="text-lg font-semibold">Attendance</h1>
            <Image src='/moreDark.png' alt='' width={20} height={20} />
        </div>
        <div className='flex flex-col h-full justify-center'>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="present" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                  {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                  ))}
                </Bar>
            </BarChart>
        </div>
    </div>
  )
}
