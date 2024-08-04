import SectionHeaders from "@/elements/SectionHeaders.tsx";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="text-center my-8">
      <SectionHeaders subHeader="Don't hesitate" mainHeader="Contact Us" />
      <div className="mt-8">
        <Link href={"+971526244459"} className="text-4xl mt-8">
          +971526244459
        </Link>
      </div>
    </section>
  );
};

export default Contact;
