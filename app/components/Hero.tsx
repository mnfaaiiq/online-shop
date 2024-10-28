import Image from "next/image";
import React from "react";
import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <section className="w-full h-full p-10 grid grid-cols-2 items-center gap-20 max-md:grid-cols-1 max-sm:mt-5">
      <div className="max-w-[475px] items-center ml-24 max-sm:ml-0">
        <h1 className="text-5xl font-bold text-center max-md:text-3xl">
          MyShop
        </h1>
        <p className="py-6 text-lg">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <HeroButton />
      </div>
      <div className="max-md:mx-auto">
        <Image
          width={100}
          height={100}
          src="/ecommerce.svg"
          alt="Hero Image"
          className="w-[500px] max-md:items-center"
          priority={true}
        />
      </div>
    </section>
  );
};

export default Hero;
