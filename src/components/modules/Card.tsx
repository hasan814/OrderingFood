import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto">
          <Image
            src="/pizza.png"
            alt="pizza"
            fill
            style={{ objectFit: "contain" }}
            className="rounded-lg"
          />
        </div>
      </div>
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nobis
        dolor ipsam in cumque eveniet.
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to Cart $12
      </button>
    </div>
  );
};

export default Card;
