"use client";
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function EventCalender(){
    const [value, onChange] = useState<Value>(new Date());


    return (
      <div className='bg-white p-4 rounded'>
        <Calendar onChange={onChange} value={value} />
      </div>
    )
}