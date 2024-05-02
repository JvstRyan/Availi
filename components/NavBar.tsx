import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
   <section className='ml-[10%] mr-[10%] mt-6'>
        <nav className='flex justify-between items-center'>
            <Image src={'/availi.svg'} width={160} height={100} alt='logo' />
            <Button variant='outlined' className=' h-10 w-32 md:w-44 font-bold' color='success'>Inloggen</Button>
        </nav>
   </section>
  )
}

export default NavBar