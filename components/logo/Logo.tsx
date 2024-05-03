import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'} className='flex items-center gap-2 mr-3 md:mr-0'>
        <Image src={'/logo.svg'} width={30} height={30} alt='brand'/>
        <p className='text-xl font-semibold hidden lg:block'>TechBazer</p>
    </Link>
  )
}

export default Logo