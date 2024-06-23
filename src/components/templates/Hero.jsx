import Arrow from "@/icons/Arrow";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything <br /> is better <br /> with a &nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-4 text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 items-center text-sm">
          <button className="bg-primary uppercase flex gap-2 text-sm text-white px-4 py-2 rounded-full">
            Order Now
            <Arrow />
          </button>
          <button className="flex items-center gap-2 py-2 text-gray-600 font-semibold">
            Learn More <Arrow />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          alt="pizza"
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, 50vw"
          fill
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
