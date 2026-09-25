"use client";

import React, { useContext, useMemo, useState } from "react";

import Link from "next/link";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import TodayPlanCard from "@/app/components/TodayPlanCard";

type SortOption = "duration" | "calories" | "rating";

const MyPlan = () => {
  const context = useContext(WorkoutsContext);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const [sortBy, setSortBy] = useState<SortOption>("duration");

  if (!context) {
    return null;
  }

  const { myPlan, saved } = context;

  // ================= TOTAL MINUTES =================

  const totalMinutes = useMemo(() => {
    return myPlan.reduce((total, workout) => total + workout.duration, 0);
  }, [myPlan]);

  // ================= TOTAL CALORIES =================

  const totalCalories = useMemo(() => {
    return myPlan.reduce((total, workout) => total + workout.caloriesBurned, 0);
  }, [myPlan]);

  // ================= SORT FUNCTION =================

  const sortedWorkouts = useMemo(() => {
    const workouts = activeTab === "today" ? [...myPlan] : [...saved];

    if (sortBy === "duration") {
      return workouts.sort((a, b) => a.duration - b.duration);
    }

    if (sortBy === "calories") {
      return workouts.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
    }

    if (sortBy === "rating") {
      return workouts.sort((a, b) => b.rating - a.rating);
    }

    return workouts;
  }, [activeTab, myPlan, saved, sortBy]);

  return (
    <main className="min-h-screen bg-[#0C0D10] px-6 py-10 font-sans text-white md:px-16">
      {/* ================= HEADER ================= */}

      <div className="mb-8">
        <h1 className="mb-2 font-oswald text-3xl font-extrabold uppercase tracking-wide md:text-4xl">
          My Plan
        </h1>

        <p className="font-inter text-sm text-gray-400 md:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* ================= METRICS ================= */}

      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Exercises */}

        <div className="rounded-2xl border border-[#2A2A2A] bg-[#15171D] p-6">
          <p className="mb-1 text-sm text-gray-400">Exercises</p>

          <h3 className="font-oswald text-4xl font-extrabold text-[#C2F800]">
            {myPlan.length}
          </h3>
        </div>

        {/* Minutes */}

        <div className="rounded-2xl border border-[#2A2A2A] bg-[#15171D] p-6">
          <p className="mb-1 text-sm text-gray-400">Minutes</p>

          <h3 className="font-oswald text-4xl font-extrabold text-white">
            {totalMinutes}
          </h3>
        </div>

        {/* Calories */}

        <div className="rounded-2xl border border-[#2A2A2A] bg-[#15171D] p-6">
          <p className="mb-1 text-sm text-gray-400">Calories</p>

          <h3 className="font-oswald text-4xl font-extrabold text-white">
            {totalCalories}
          </h3>
        </div>
      </div>

      {/* ================= TABS + SORT ================= */}

      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        {/* ================= TABS ================= */}

        <div className="flex rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] p-1">
          {/* Today's Plan */}

          <button
            onClick={() => setActiveTab("today")}
            className={`rounded-lg px-6 py-2 text-sm font-semibold transition-all ${
              activeTab === "today"
                ? "bg-[#1A2312] text-[#C2F800]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today's Plan
          </button>

          {/* Saved */}

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-lg px-6 py-2 text-sm font-semibold transition-all ${
              activeTab === "saved"
                ? "bg-[#2A2A2A] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {/* ================= SORT ================= */}

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Sort By</span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="cursor-pointer rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-4 py-3 font-medium text-white outline-none focus:border-[#C2F800]"
          >
            <option value="duration" className="bg-[#1A1A1A]">
              Duration
            </option>

            <option value="calories" className="bg-[#1A1A1A]">
              Calories
            </option>

            <option value="rating" className="bg-[#1A1A1A]">
              Rating
            </option>
          </select>
        </div>
      </div>

      {/* ================= TODAY'S PLAN ================= */}

      {activeTab === "today" && (
        <>
          {sortedWorkouts.length > 0 ? (
            <div className="space-y-5">
              {sortedWorkouts.map((workout) => (
                <TodayPlanCard key={workout.id} workout={workout} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#2A2A2A] bg-[#161616]/50 p-16 text-center">
              <h2 className="mb-2 text-xl font-bold uppercase tracking-wider text-white md:text-2xl">
                Nothing Here Yet
              </h2>

              <p className="mb-6 max-w-sm text-sm text-gray-400">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/workout"
                className="rounded-xl bg-[#C2F800] px-6 py-3 font-bold text-black transition-colors hover:bg-[#B0DF00]"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </>
      )}

      {/* ================= SAVED ================= */}

      {activeTab === "saved" && (
        <>
          {sortedWorkouts.length > 0 ? (
            <div className="space-y-5">
              {sortedWorkouts.map((workout) => (
                <TodayPlanCard
                  key={workout.id}
                  workout={workout}
                  isSavedCard={true}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#2A2A2A] bg-[#161616]/50 p-16 text-center">
              <h2 className="mb-2 text-xl font-bold uppercase tracking-wider text-white md:text-2xl">
                Nothing Saved Yet
              </h2>

              <p className="mb-6 max-w-sm text-sm text-gray-400">
                Save workouts for later and they will appear here.
              </p>

              <Link
                href="/workout"
                className="rounded-xl bg-[#C2F800] px-6 py-3 font-bold text-black transition-colors hover:bg-[#B0DF00]"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default MyPlan;
