import React from "react";

const Card = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center">
      <img src="/pizza.png" alt="pizza" />
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