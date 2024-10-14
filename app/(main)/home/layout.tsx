import Sidebar from '@/components/shared/sidebar'
import React from 'react'

const HomeLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='h-full w-full'>
        {children}
    </main>
  )
}

export default HomeLayout