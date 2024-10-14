import Sidebar from '@/components/shared/sidebar'
import React from 'react'

const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='h-full flex w-full space-x-6'>
      <Sidebar/>
        {children}
    </main>
  )
}

export default MainLayout