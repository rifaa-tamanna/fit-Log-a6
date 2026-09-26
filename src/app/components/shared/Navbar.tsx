"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContext } from "react";

import logo from "@/assets/logo.png";
import { WorkoutsContext } from "@/context/WorkoutsContext";

const Navbar = () => {
  const pathname = usePathname();
  const context = useContext(WorkoutsContext);

  const planCount = context?.myPlan.length ?? 0;
  const savedCount = context?.saved.length ?? 0;

  const isWorkoutActive =
    pathname === "/workout" || pathname.startsWith("/workout/");

  const isMyPlanActive =
    pathname === "/my-plan" || pathname.startsWith("/my-plan/");

  return (
    <div className="navbar bg-black shadow-sm text-center">
      <div className="max-w-7xl mx-auto w-full px-4">
        {/* ================= MOBILE ================= */}
        <div className="lg:hidden w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logo}
                alt="FitLog"
                width={45}
                height={45}
                className="w-10 h-10 object-contain"
              />

              <span className="text-xl font-bold font-oswald text-white">
                FITLOG
              </span>
            </Link>

            {/* Mobile Menu */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost text-white"
              >
                <svg
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

              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 z-[1] w-52 rounded-box bg-[#15171D] border border-[#292C34] p-2 shadow"
              >
                <li>
                  <Link
                    href="/workout"
                    className={
                      isWorkoutActive
                        ? "text-[#C0F600] font-semibold bg-[#1A2312]"
                        : "text-slate-400 font-semibold"
                    }
                  >
                    Workouts
                  </Link>
                </li>

                <li>
                  <Link
                    href="/my-plan?tab=today"
                    className={
                      isMyPlanActive
                        ? "text-[#C0F600] font-semibold bg-[#1A2312]"
                        : "text-slate-400 font-semibold"
                    }
                  >
                    My Plan
                  </Link>
                </li>

                <li>
                  <Link
                    href="/my-plan?tab=today"
                    className="flex justify-between text-gray-300"
                  >
                    <span>Plan</span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800] text-xs font-bold text-black">
                      {planCount}
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/my-plan?tab=saved"
                    className="flex justify-between text-gray-400"
                  >
                    <span>Saved</span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#343944] text-xs font-bold text-white">
                      {savedCount}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:flex navbar px-0">
          {/* Logo */}
          <div className="navbar-start">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logo}
                alt="FitLog"
                width={45}
                height={45}
                className="w-10 h-10 object-contain"
              />

              <span className="text-xl font-bold font-oswald text-white">
                FITLOG
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="navbar-center">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li>
                <Link
                  href="/workout"
                  className={
                    isWorkoutActive
                      ? "text-[#C0F600] font-semibold font-inter py-[10px] px-[20px] rounded-full bg-[#1A2312]"
                      : "text-slate-400 font-inter font-semibold py-[10px] px-[20px] rounded-full"
                  }
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan?tab=today"
                  className={
                    isMyPlanActive
                      ? "text-[#C0F600] font-semibold font-inter py-[10px] px-[20px] rounded-full bg-[#1A2312]"
                      : "text-slate-400 font-inter font-semibold py-[10px] px-[20px] rounded-full"
                  }
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Plan & Saved */}
          <div className="navbar-end">
            <div className="flex items-center gap-6">
              {/* Plan */}
              <Link
                href="/my-plan?tab=today"
                className="flex items-center gap-2 text-sm text-gray-300"
              >
                Plan
                <span className="flex h-7 min-w-7 items-center justify-center rounded-md bg-[#C2F800] px-2 text-sm font-bold text-black">
                  {planCount}
                </span>
              </Link>

              {/* Saved */}
              <Link
                href="/my-plan?tab=saved"
                className="flex items-center gap-2 text-sm text-gray-400"
              >
                Saved
                <span className="flex h-7 min-w-7 items-center justify-center rounded-md border border-[#343944] px-2 text-sm font-bold text-white">
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
