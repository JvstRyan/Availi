import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='flex justify-center items-center h-screen flex-col gap-10'>
        <Image src={'/availi.svg'} width={200} height={200} alt='logo' />
        <p className='text-4xl font-semibold'>Wacht even totdat de admin je toelaat...</p>
    </div>
  )
}

export default Page