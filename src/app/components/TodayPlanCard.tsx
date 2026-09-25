"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { ILibrary } from "@/type/libraryType";
import { WorkoutsContext } from "@/context/WorkoutsContext";

interface TodayPlanCardProps {
  workout: ILibrary;
  isSavedCard?: boolean;
}

const TodayPlanCard = ({
  workout,
  isSavedCard = false,
}: TodayPlanCardProps) => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    return null;
  }

  const {
    removeFromPlan,
    removeFromSaved,
    doneWorkouts,
    markAsDone,
    addToPlan,
    myPlan,
  } = context;

  const isDone = doneWorkouts.includes(workout.id);

  const isAlreadyInPlan = myPlan.some((item) => item.id === workout.id);

  const handleRemove = () => {
    if (isSavedCard) {
      removeFromSaved(workout.id);
    } else {
      removeFromPlan(workout.id);
    }
  };

  const handleMarkDone = () => {
    markAsDone(workout.id);
  };

  const handleAddToPlan = () => {
    addToPlan(workout);
  };

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-[#292C34] bg-[#15171D] p-5 md:flex-row md:items-center md:justify-between">
      {/* ================= LEFT ================= */}

      <div className="flex min-w-0 items-center gap-5">
        {/* Image */}
        <div className="relative h-[100px] w-[175px] shrink-0 overflow-hidden rounded-xl">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="175px"
            className="object-cover"
          />
        </div>

        {/* Information */}
        <div className="min-w-0">
          <h2 className="font-oswald text-xl font-bold uppercase text-white">
            {workout.name}
          </h2>

          <p className="mt-1 font-inter text-sm text-gray-400">
            {workout.equipment}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-4 font-inter text-sm">
            {/* Duration */}
            <div className="flex items-center gap-1.5 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#C2F800]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="9" strokeWidth={2} />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 7v5l3 2"
                />
              </svg>
              {workout.duration} min
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5 text-gray-300">
              <span className="text-[#C2F800]">♨</span>
              {workout.caloriesBurned} kcal
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5 text-gray-300">
              <span className="text-[#C2F800]">☆</span>

              {workout.rating}
            </div>
          </div>
        </div>
      </div>

      {/* ================= RIGHT ================= */}

      <div className="flex shrink-0 flex-wrap items-center gap-3">
        {/* View Details */}
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-[#343944] px-5 py-3 text-sm font-semibold text-white transition-all hover:border-[#C2F800] hover:text-[#C2F800]"
        >
          View Details
        </Link>

        {/* Saved Card → Add to Plan */}
        {isSavedCard ? (
          <button
            onClick={handleAddToPlan}
            disabled={isAlreadyInPlan}
            className={`rounded-full px-5 py-3 text-sm font-bold transition-all ${
              isAlreadyInPlan
                ? "cursor-not-allowed bg-[#292D34] text-gray-500"
                : "bg-[#C2F800] text-black hover:bg-[#B0E000]"
            }`}
          >
            {isAlreadyInPlan ? "Already in Plan" : "Add to Plan"}
          </button>
        ) : (
          /* Today's Plan → Mark Done */
          <button
            onClick={handleMarkDone}
            disabled={isDone}
            className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all ${
              isDone
                ? "cursor-default bg-[#292D34] text-[#C2F800]"
                : "bg-[#C2F800] text-black hover:bg-[#B0E000]"
            }`}
          >
            <span>✓</span>

            {isDone ? "Done" : "Mark as Done"}
          </button>
        )}

        {/* Remove */}
        <button
          onClick={handleRemove}
          aria-label={`Remove ${workout.name}`}
          className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-gray-500 transition-all hover:bg-[#252830] hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default TodayPlanCard;
