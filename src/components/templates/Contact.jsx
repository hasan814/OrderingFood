import SectionHeaders from "@/elements/SectionHeaders";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="text-center my-8">
      <SectionHeaders subHeader={"Don't hesitate"} mainHeader={"Contact Us"} />
      <Link className="text-4xl underline text-gray-500" href={"+971526244459"}>
        +971526244459
      </Link>
    </section>
  );
};

export default Contact;
