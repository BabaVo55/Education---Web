import AttendanceChart from '@/components/AttendanceChart'
import CountChart from '@/components/CountChart'
import EventCalender from '@/components/EventCalender'
import FinanceChart from '@/components/FinanceChart'
import UserCards from '@/components/UserCards'
import React from 'react'


export default function AdminPage() {
  function rand(){
    return Math.floor(Math.random() * 3000)
  }
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row h-full'>
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
            <CountChart count={rand()} gender={false}/>
          </div>
          {/* Attendance Chart */}
          <div className='w-full lg:w-2/3'>
            <AttendanceChart />
          </div>

        </div>
        {/* Bottom Charts */}
        <div className="w-full lg:-w-2/3 h-[500px] mt-4">
          <FinanceChart />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3 flex  flex-col gap-8 border  ">
        <EventCalender />
      </div>
    </div>
  )
}
