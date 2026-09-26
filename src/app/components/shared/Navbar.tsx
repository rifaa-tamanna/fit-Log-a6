"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { usePathname } from "next/navigation";

import logo from "@/assets/logo.png";
import { WorkoutsContext } from "@/context/WorkoutsContext";

const Navbar = () => {
  const context = useContext(WorkoutsContext);

  const pathname = usePathname();

  const planCount = context?.myPlan.length ?? 0;
  const savedCount = context?.saved.length ?? 0;

  // ================= ACTIVE NAV =================

  const isWorkoutActive =
    pathname === "/workout" || pathname.startsWith("/workout/");

  const isMyPlanActive =
    pathname === "/my-plan" || pathname.startsWith("/my-plan/");

  const links = (
    <>
      {/* ================= WORKOUTS ================= */}

      <li>
        <Link
          href="/workout"
          className={`font-inter font-semibold transition-all ${
            isWorkoutActive
              ? "rounded-full bg-[#1A2312] px-[20px] py-[10px] text-[#C0F600]"
              : "px-[20px] py-[10px] text-slate-400 hover:text-white"
          }`}
        >
          Workouts
        </Link>
      </li>

      {/* ================= MY PLAN ================= */}

      <li>
        <Link
          href="/my-plan"
          className={`font-inter font-semibold transition-all ${
            isMyPlanActive
              ? "rounded-full bg-[#1A2312] px-[20px] py-[10px] text-[#C0F600]"
              : "px-[20px] py-[10px] text-slate-400 hover:text-white"
          }`}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 items-center bg-black text-center shadow-sm">
      <div className="mx-auto w-full max-w-7xl">
        {/* ================= MOBILE NAVBAR ================= */}

        <div className="flex items-center justify-between lg:hidden">
          {/* Hamburger */}

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
              className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}

          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="FitLog Logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />

            <span className="text-xl font-semibold text-white">FITLOG</span>
          </Link>

          <div className="w-10" />
        </div>

        {/* ================= DESKTOP NAVBAR ================= */}

        <div className="navbar hidden lg:flex">
          {/* Logo */}

          <div className="navbar-start">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/logo.png"
                alt="FitLog Logo"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />

              <span className="font-oswald text-xl font-semibold text-white">
                FITLOG
              </span>
            </Link>
          </div>

          {/* Center Links */}

          <div className="navbar-center">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          {/* Right */}

          <div className="navbar-end">
            <div className="flex items-center gap-4">
              {/* ================= PLAN ================= */}

              <Link
                href="/my-plan"
                className="flex items-center gap-2 font-bold text-sm text-gray-300"
              >
                Plan
                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-lime-400 px-1.5 font-inter text-sm text-black">
                  {planCount}
                </span>
              </Link>

              {/* ================= SAVED ================= */}

              <Link
                href="/my-plan"
                className="flex items-center gap-2 font-bold text-sm text-gray-400"
              >
                Saved
                <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-gray-600 px-1.5 font-inter text-sm text-gray-400">
                  {savedCount}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
