import Image from "next/image";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ContactUs bottomImage="/images/pages/home/homepage.contactus.img.png" />
    </div>
  );
}
