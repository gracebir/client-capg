import React from 'react'

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
    <header className="flex justify-between items-center px-16 py-10 text-primary">
    <a className="flex items-center font-semibold" href="#hero">
        <img className="h-10" src="https://i.ibb.co/YfKbFYG/logo.png" alt=""/>
        <span className="font-poppins text-2xl tracking-wider">CAPG</span>
    </a>
    <div className="flex gap-8 font-semibold">
        {navItems.map((item, i)=> (
          <a key={i} className="hover:text-lime-700 hover:underline text-[1rem]" href={item.href}>{item.linkName}</a>
        ))}
    </div>
</header>
  )
}

export default NavBar
