import React from "react";
import CardItem from "./CardItem";
import Link from "next/link";

const Products = () => {
  return (
    <section id="products">
      <div className="flex flex-col p-5">
        <div className="w-full text-5xl py-5 font-bold text-center max-sm:text-4xl">
          Our Product:{" "}
        </div>
        <CardItem />
      </div>
      <div className="text-end p-5 text-lg">
        <Link href={"/products"} className="underline hover:italic">
          See all
        </Link>
      </div>
    </section>
  );
};

export default Products;
