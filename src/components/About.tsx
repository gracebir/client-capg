import React from "react";

function About() {
  return (
    <section className="px-12 md:px-16 h-[60vh] flex" id="about">
      <div className="text-center md:w-1/2 mx-auto py-8 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl md:text-4xl font-bold font-poppins">A propos de nous</h1>
          <div className="bg-primary w-[40%] rounded-lg h-2"></div>
        </div>

        <p className="text-[1.2rem] md:text-[1.5rem]">
          Est une organisation sans but lucratif œuvrant dans les domaines de
          Bonne gouvernance, Gestion de Conflits et Développement
          Environnemental.
        </p>
      </div>
    </section>
  );
}

export default About;
