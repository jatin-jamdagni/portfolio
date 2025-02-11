import Header from '@/components/Header';
import Tooltip from '@/components/Tooltip';
import React from 'react'

const Home = () => {
  return (
    <main className=' w-full h-full flex items-center justify-center'>
      <div className=' w-full px-4 py-12  max h-full md:max-w-2xl lg:max-w-4xl'>
        <Header />
      </div>
    </main >
  )
}

export default Home;