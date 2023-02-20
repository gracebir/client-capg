import React from "react";
import { BsTelephoneFill, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer className="w-full bg-primary text-white py-8">
      <div className="flex flex-col-reverse gap-8 items-center md:items-start md:max-w-7xl md:px-16 md:mx-auto md:flex md:flex-row md:justify-between">
        <div className="flex flex-col gap-4 items-center md:items-start">
        <a className="flex items-center font-semibold" href="#hero">
            <img
              className="h-10"
              src="https://i.ibb.co/YfKbFYG/logo.png"
              alt=""
            />
            <span className="font-poppins text-4xl font-bold tracking-wider">
              CAPG
            </span>
          </a>
          <p className="text-center md:text-start md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            magnam cum, iste molestiae culpa officia ipsam! Quos deserunt,
            perferendis sed, quas magnam
          </p>
          <p className="text-[1rem] font-semibold underline flex  gap-2 items-center">
            <BsTelephoneFill /> <span>+243 972 089 000</span>
          </p>
          <div className="flex flex-col gap-2 font-semibold">
            <a className="hover:underline text-[1rem]" href="#about">
              A propos
            </a>
            <a className="hover:underline text-[1rem]" href="#activity">
              Activites
            </a>
            <a className="hover:underline text-[1rem]" href="#contact">
              Contact
            </a>
          </div>
          {/* social */}
          <div className="flex gap-4">
            <a href="facebook">
                <BsFacebook size={30}/>
            </a>
            <a href="twitter">
                <BsTwitter size={30}/>
            </a>
            <a href="instagram">
                <BsInstagram size={30}/>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full md:w-[60%]">
          <h1 className="font-poppins text-3xl md:text-4xl font-bold tracking-wider">
            Contactez-nous
          </h1>
          <form className="flex flex-col gap-4" action="">
            <input
              placeholder="Nom ..."
              className="px-2 py-2 outline-none rounded-md text-[1rem]"
              type="text"
            />
            <input
              placeholder="E-mail ..."
              className="px-2 py-2 outline-none rounded-md text-[1rem]"
              type="text"
            />
            <textarea
              placeholder="Tape votre message"
              name=""
              id=""
              className="px-2 py-2 outline-none rounded-md text-[1rem]"
              cols={20}
              rows={10}
            ></textarea>
            <button className="bg-green-800 py-4 font-semibold rounded-md text-[1rem] hover:bg-green-900 transition ease-in-out duration-300">
              envoyer
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
