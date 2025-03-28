'use client'

import Image from 'next/image';
import React from 'react';



export default function FinanceChart() {
    return (
        <div className="bg-white rounded-xl p-4 h-full w-full">
            <div className='flex justify-between'>
                <h1>FinanceChart</h1>
                <Image src='/moreDark.png' alt="" width={20} height={20} />
            </div>

        </div>
    )
}




