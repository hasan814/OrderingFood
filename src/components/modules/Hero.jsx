import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything
          <br /> is better <br /> with a&nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-4 text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex items-center gap-4 text-sm">
          <button className="uppercase flex items-center gap-2 bg-primary text-white px-8 py-2 rounded-full">
            Order Now
            <IoArrowForwardCircleOutline />
          </button>
          <button className="flex items-center gap-2 py-2 text-gray-600 font-semibold">
            Learn More <IoArrowForwardCircleOutline />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          alt="pizza"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default Hero;
