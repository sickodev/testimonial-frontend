import H1 from '@/components/ui/h1'
import React from 'react'

const Home = () => {
  return (
    <main className='h-full w-full flex flex-col justify-center items-center'>
        <div className='bg-clip-text text-transparent bg-gradient-to-b from-primary to-transparent'>
            <H1>
                Nothing to show here.
            </H1>
        </div>
        <p className='my-4 opacity-50'>Click on an option to view more.</p>
    </main>
  )
}

export default Home