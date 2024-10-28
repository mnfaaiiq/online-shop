import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex p-5 gap-5 justify-between max-sm:flex-col max-sm:justify-center max-sm:items-center">
      <div className="flex flex-col">
        <h4 className="text-2xl text-center underline max-md:text-xl">
          MyPerfume
        </h4>
        <p className="text-lg mt-5 max-sm:text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, atque!
        </p>
        <div className="flex gap-2 justify-center mt-5 text-2xl max-sm:mt-2">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
      <div className="flex flex-col gap-1 max-sm:mt-5 max-sm:gap-2">
        <h4 className="text-2xl text-center underline max-md:text-xl">
          Resources
        </h4>
        <p className="text-lg">Our Agents</p>
        <p className="text-lg">Member</p>
        <p className="text-lg">Free Trial</p>
      </div>
      <div className="flex flex-col gap-1 max-sm:mt-5 max-sm:gap-2">
        <h4 className="text-2xl text-center underline max-md:text-xl">
          Company
        </h4>
        <p className="text-lg">Partnership</p>
        <p className="text-lg">Privacy</p>
        <p className="text-lg">Term of use</p>
      </div>
      <div className="flex flex-col gap-5 max-sm:mt-5 max-sm:gap-2">
        <h4 className="text-2xl text-center max-md:text-xl">Get in touch</h4>
        <div>
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-zinc-200 p-2 rounded-lg text-black"
          />
          <MdEmail className="relative top-[-30px] text-lg left-[180px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
