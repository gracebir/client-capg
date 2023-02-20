import React from "react";

function Hero() {
  return (
    <section className="h-[82vh] px-16 flex items-center" id="hero">
      <div className="mx-auto flex flex-col gap-14 items-center">
        <h1 className="font-poppins text-4xl text-center font-bold">
          Le centre Africain de Paix et Gouvernance
        </h1>
        <p className="text-center w-[65%] text-[1.5rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          assumenda? Autem exercitationem laboriosam ipsam sunt beatae dolore
          quis, earum asperiores minus quaerat amet eos temporibus?
        </p>
        <a
          className="px-16 py-4 bg-bgGreen text-white font-poppins font-semibold rounded-full transition ease-in-out duration-300 hover:bg-lime-700"
          href=""
        >
          Contactez nous
        </a>
      </div>
    </section>
  );
}

export default Hero;
