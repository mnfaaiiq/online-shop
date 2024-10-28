import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-fuchsia-500 text-white max-sm:items-center max-sm:justify-center">
      <div className="w-full h-full flex items-center justify-between p-5 max-md:flex-col max-sm:justify-center">
        <div className="text-2xl max-md:text-xl max-md:mb-3 max-sm:items-center">
          My<i className="italic">Shop</i>
        </div>
        <ul className="flex gap-4 text-xl mr-8 max-sm:flex-col max-sm:justify-center max-sm:ml-16 max-sm:mt-5 max-sm:gap-2">
          <li className="hover:text-slate-300 transition-all">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-slate-300 transition-all">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-slate-300 transition-all">
            <a href="#products">Products</a>
          </li>
          <li className="hover:text-slate-300 transition-all">
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
