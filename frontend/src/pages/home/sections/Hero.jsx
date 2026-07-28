import React from "react";
import { FaGithub, FaBehance } from "react-icons/fa";
import Button from "../../../components/button/Button";
import VoiceoverBtn from "../../../components/button/VoiceoverBtn";
import Headshot from "../../../assets/home/headshot.jpg";



const Hero = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-8 mx-12 w-full max-w-6xl px-4 py-12">
      <div className="w-1/2">
        <h3 className="text-lg font-medium text-[var(--text-3)]">Hi I'm</h3>
        <div>
          <h1 className="text-5xl font-bold text-primary">Gaby</h1>
          <h1 className="text-5xl font-bold text-foreground">Norris</h1>
        </div>
        <h3 className="text-xl font-normal text-[var(--text-3)]">Interactive Developer & UX designer</h3>
        <p className="text-neutral">
          Third-year student at Open Window Institute, crafting digital experiences that live at the intersection of code and design. I build things that feel as intentional as they look.
        </p>
      <div className="flex flex-row gap-4 mt-4">
        {/* Todo: Replace with actual Github link https://github.com/GabyNorris */}
        <Button colour="primary" icon={<FaGithub />} label="Github" link="https://github.com/GabyNor05"/>
        <Button colour="secondary" icon={<FaBehance />} label="Behance" link="https://www.behance.net/gabynorris1"/>
        <VoiceoverBtn/>
      </div>
      </div>

      <div>
        <img src={Headshot} alt="Gaby Norris" className="rounded-full w-64 h-64 object-cover"/>
      </div>
    </div>
  );
};

export default Hero;
