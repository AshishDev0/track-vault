import Logo from '@/components/Logo'
import React, { ReactNode } from 'react'

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex justify-center items-center h-screen w-full flex-col">
        <Logo />
        <div className='mt-12'>{ children }</div>
    </div>
  )
}

export default layout
