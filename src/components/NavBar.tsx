import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

const navItems = [
  {
    linkName: 'A propos',
    href: '#propos'
  },
  {
    linkName: 'Nos Activités',
    href: '#activities'
  },
  {
    linkName: 'Contact',
    href: '#contact'
  }
]

function NavBar() {
  return (
    <header className="absolute w-full flex justify-between items-center md:max-w-7xl md:mx-auto md:px-16 md:py-6 text-primary">
    <a className="flex items-center font-semibold" href="#hero">
        <img className="h-10" src="https://i.ibb.co/YfKbFYG/logo.png" alt=""/>
        <span className="font-poppins text-2xl tracking-wider">CAPG</span>
    </a>
    <div className='md:hidden'>
      <GiHamburgerMenu size={30}/>
    </div>
    <div className="hidden md:flex font-semibold md:gap-8 md:flex-row">
        {navItems.map((item, i)=> (
          <a key={i} className="hover:text-lime-700 hover:underline text-[1rem]" href={item.href}>{item.linkName}</a>
        ))}
    </div>
    <div className="md:hidden relative top-0 right-0 w-[90%] h-[50vh] bg-primary flex flex-col font-semibold text-white p-4 md:gap-8 md:flex-row">
      <div className='text-white'>
        <GrClose size={30}/>
      </div>
      <div className='flex flex-col gap-6 items-center'>
        {navItems.map((item, i)=> (
          <a key={i} className="hover:underline text-[1rem]" href={item.href}>{item.linkName}</a>
        ))}
      </div>
    </div>
</header>
  )
}

export default NavBar
