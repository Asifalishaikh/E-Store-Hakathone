"use client"
import { Buda } from 'next/font/google'
import React, { useState } from 'react'

const Quantity = () => {
  //let num = 1; this will not update so we need to use state to update variable
  const[num, setNum] =useState(2)
  return (
      <div className='_center gap-2 cursor-pointer'>
      
      {/* Minus */}
      <button className='h-6 w-6 rounded-full border _center'
      onClick={() => {
        {setNum(num <= 0 ? 0 : num - 1)}
      }}
      >-</button>

          {/* number */}
      <div className='text-sm'> {num}</div>
      
      {/* Plus */}
      <button className='h-6 w-6 rounded-full border _center'
      onClick={() => {
        {setNum(num + 1)}
      }}
      >+</button>
    </div>
  )
}

export default Quantity