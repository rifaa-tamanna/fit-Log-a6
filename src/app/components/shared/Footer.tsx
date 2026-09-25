import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto footer my-[20px] bg-[#090A0D]  mx-auto sm:footer-horizontal text-neutral-content items-center p-4">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={logo}
          alt="FitLog Logo"
          width={18}
          height={18}
          className="h-7 w-7 object-contain"
        />

        <span className="text-[17px] font-lg text-white">FITLOG</span>
      </Link>

      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <aside className="grid-flow-col items-center">
          <p className="text-[#6B7280]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </aside>
      </nav>
    </footer>
  );
};

export default Footer;
