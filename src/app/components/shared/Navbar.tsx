import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/workout"
        className="text-[#C0F600] font-inter py-[10px] px-[20px] rounded-full bg-[#1A2312]"
        >Workouts</Link>
      </li>

      <li>
        <Link href="/my-plan"
        className="text-slate-400 font-inter"
        >My Plan</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black shadow-sm">
      <div className="max-w-7xl mx-auto w-full">

        {/* ================= MOBILE NAVBAR ================= */}
        <div className="flex items-center justify-between lg:hidden">

          {/* Hamburger - LEFT */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            {/* Mobile Menu */}
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          {/* Logo + FITLOG - CENTER */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image
              src="/assets/logo.png"
              alt="FitLog Logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />

            <span className="text-xl font-semibold text-white">
              FITLOG
            </span>
          </Link>

          {/* Button - RIGHT */}
          <button className="btn">
            Button
          </button>

        </div>


        {/* ================= DESKTOP NAVBAR ================= */}
        <div className="hidden lg:flex navbar">

          {/* Logo - LEFT */}
          <div className="navbar-start">
            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <Image
                src="/assets/logo.png"
                alt="FitLog Logo"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />

              <span className="text-xl font-semibold text-white font-oswald">
                FITLOG
              </span>
            </Link>
          </div>

          {/* Links - CENTER */}
          <div className="navbar-center">
            <ul className="menu menu-horizontal px-1">
              {links}
            </ul>
          </div>

          {/* Button - RIGHT */}
          <div className="navbar-end">
            <button className="btn">
              Button
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Navbar;