"use client";

import React, { Suspense, useContext } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import TodayPlanCard from "@/app/components/TodayPlanCard";

type SortOption = "duration" | "calories" | "rating";

const MyPlanContent = () => {
  const context = useContext(WorkoutsContext);
  const router = useRouter();
  const searchParams = useSearchParams();

  if (!context) {
    return null;
  }

  const { myPlan, saved } = context;

  // ================= ACTIVE TAB =================

  const tab = searchParams.get("tab");

  const activeTab = tab === "saved" ? "saved" : "today";

  // ================= SORT =================

  const [sortBy, setSortBy] = React.useState<SortOption>("duration");

  // ================= TOTALS =================

  const totalExercises = myPlan.length;

  const totalMinutes = myPlan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = myPlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  // ================= SORT DATA =================

  const sortedWorkouts = [...myPlan].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  const sortedSaved = [...saved].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  // ================= TAB CHANGE =================

  const handleTabChange = (tabName: "today" | "saved") => {
    router.push(`/my-plan?tab=${tabName}`);
  };

  return (
    <main className="min-h-screen bg-[#0C0D10] text-white px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-10 font-sans">
      {/* ================= HEADER ================= */}

      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-oswald md:text-4xl font-extrabold tracking-wide uppercase mb-2">
          My Plan
        </h1>

        <p className="text-gray-400 font-inter text-sm md:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* ================= STATS ================= */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
        {/* Exercises */}
        <div className="bg-[#15171D] border border-[#292C34] font-inter rounded-2xl p-5 md:p-6">
          <p className="text-gray-400 text-sm mb-1">Exercises</p>

          <h3 className="text-4xl font-oswald font-extrabold text-[#C2F800]">
            {totalExercises}
          </h3>
        </div>

        {/* Minutes */}
        <div className="bg-[#15171D] border border-[#292C34] font-inter rounded-2xl p-5 md:p-6">
          <p className="text-gray-400 text-sm mb-1">Minutes</p>

          <h3 className="text-4xl font-oswald font-extrabold text-white">
            {totalMinutes}
          </h3>
        </div>

        {/* Calories */}
        <div className="bg-[#15171D] border border-[#292C34] font-inter rounded-2xl p-5 md:p-6">
          <p className="text-gray-400 text-sm mb-1">Calories</p>

          <h3 className="text-4xl font-oswald font-extrabold text-white">
            {totalCalories}
          </h3>
        </div>
      </div>

      {/* ================= TAB + SORT ================= */}

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        {/* Tabs */}

        <div className="flex bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-1">
          <button
            onClick={() => handleTabChange("today")}
            className={`px-5 sm:px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === "today"
                ? "bg-[#1A2312] text-[#C2F800]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => handleTabChange("saved")}
            className={`px-5 sm:px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === "saved"
                ? "bg-[#2A2A2A] text-white shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort */}

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Sort By</span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-[#15171D] border border-[#343944] px-4 py-2 rounded-xl text-white font-medium outline-none cursor-pointer"
          >
            <option value="duration">Duration</option>

            <option value="calories">Calories</option>

            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* ================= TODAY'S PLAN ================= */}

      {activeTab === "today" && (
        <div className="max-w-7xl mx-auto">
          {sortedWorkouts.length > 0 ? (
            <div className="flex flex-col gap-5">
              {sortedWorkouts.map((workout) => (
                <TodayPlanCard key={workout.id} workout={workout} />
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-[#2A2A2A] rounded-2xl p-10 md:p-16 flex flex-col items-center justify-center text-center bg-[#161616]/50">
              <h2 className="text-xl md:text-2xl font-oswald font-bold text-white mb-2">
                Nothing Here Yet
              </h2>

              <p className="text-gray-400 text-sm mb-6">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/workout"
                className="bg-[#C2F800] hover:bg-[#B0E000] text-black font-bold px-6 py-3 rounded-xl transition-all"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>
      )}

      {/* ================= SAVED ================= */}

      {activeTab === "saved" && (
        <div className="max-w-7xl mx-auto">
          {sortedSaved.length > 0 ? (
            <div className="flex flex-col gap-5">
              {sortedSaved.map((workout) => (
                <TodayPlanCard
                  key={workout.id}
                  workout={workout}
                  isSavedCard={true}
                />
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-[#2A2A2A] rounded-2xl p-10 md:p-16 flex flex-col items-center justify-center text-center bg-[#161616]/50">
              <h2 className="text-xl md:text-2xl font-oswald font-bold text-white mb-2">
                Nothing Saved Yet
              </h2>

              <p className="text-gray-400 text-sm mb-6">
                Save a workout from the library and find it here later.
              </p>

              <Link
                href="/workout"
                className="bg-[#C2F800] hover:bg-[#B0E000] text-black font-bold px-6 py-3 rounded-xl transition-all"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>
      )}
    </main>
  );
};

const MyPlan = () => {
  return (
    <Suspense fallback={null}>
      <MyPlanContent />
    </Suspense>
  );
};

export default MyPlan;
