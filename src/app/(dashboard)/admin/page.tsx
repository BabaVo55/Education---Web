import CountChart from '@/components/CountChart'
import UserCards from '@/components/UserCards'
import React from 'react'


export default function AdminPage() {
  function rand(){
    return Math.floor(Math.random() * 3000)
  }
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* Left */}
      <div className="w-full lg:w-2/3 border">
        {/* UserCards */}
        <div className="flex gap-4 justify-between m-4 flex-wrap ">
          <UserCards type='hello' numba={rand()} />
          <UserCards type='hello' numba={rand()} />
          <UserCards type='hello' numba={rand()} />
          <UserCards type='hello' numba={rand()} />
        </div>
        {/* Middle Charts */}
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/* Count Chart */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart count={rand()} gender='Male'/>
          </div>
          {/* Attendance Chart */}
          <div className='w-full lg:w-2/3'>
            <CountChart />
          </div>

        </div>
        {/* Bottom Charts */}
        <div className="lg:-w-2/3"></div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3 border border-black">
        
      </div>
    </div>
  )
}
