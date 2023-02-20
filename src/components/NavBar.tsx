import React, {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const navItems = [
  {
    linkName: "A propos",
    href: "#propos",
  },
  {
    linkName: "Nos Activités",
    href: "#activities",
  },
  {
    linkName: "Contact",
    href: "#contact",
  },
];

function NavBar() {
  const [isToggled, setIsToggle] = useState(false)

  const handleToggle = () => setIsToggle(!isToggled)
  return (
    <header className="w-full flex px-4 py-4 h-[10vh] justify-between z-auto items-center md:max-w-7xl md:mx-auto md:px-16 md:py-10 text-primary">
      <div className="flex justify-between items-center w-full md:w-fit">
        <a className="flex items-center font-semibold" href="#hero">
          <img
            className="h-10"
            src="https://i.ibb.co/YfKbFYG/logo.png"
            alt=""
          />
          <span className="font-poppins text-2xl font-bold tracking-wider">
            CAPG
          </span>
        </a>
        <div onClick={handleToggle} className="md:hidden block cursor-pointer">
          {isToggled ? <GrClose size={30}/> : <GiHamburgerMenu size={30} />}
        </div>
      </div>

      <div className={isToggled ?
        `transition-all opacity-100 ease-in duration-500 flex flex-col top-20 bg-white md:mt-0 w-full md:right-0 md:flex-row md:w-fit px-4 left-0 absolute` :
        `flex flex-col md:mt-0 md:flex md:gap-7 md:items-center md:static absolute w-full md:flex-row left-0 md:right-0 md:w-fit md:opacity-100 top-[-200px] md:top-0 transition-all opacity-0 ease-in duration-500`
      }>
        {navItems.map((item, i) => (
          <a
            key={i}
            className="hover:text-lime-700 hover:underline text-[1rem] py-2 md:py-0"
            href={item.href}
          >
            {item.linkName}
          </a>
        ))}
      </div>
    </header>
  );
}

export default NavBar;
