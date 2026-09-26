import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto my-[20px] bg-[#090A0D] text-neutral-content p-4 rounded-lg flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-4">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center justify-center gap-2 md:justify-start"
      >
        <Image
          src={logo}
          alt="FitLog Logo"
          width={18}
          height={18}
          className="h-7 w-7 object-contain"
        />

        <span className="text-[17px] font-lg text-white">FITLOG</span>
      </Link>

      {/* Copyright */}
      <p className="text-[#6B7280] text-center text-sm sm:text-right">
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </p>
    </footer>
  );
};

export default Footer;
