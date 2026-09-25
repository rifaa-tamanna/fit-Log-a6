"use client";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { ILibrary } from "@/type/libraryType";
import { useContext } from "react";
import { toast } from "react-toastify";

const AddToPlanButton = ({
  workoutSingleCard,
}: {
  workoutSingleCard: ILibrary;
}) => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    return null;
  }

  const { myPlan, addToPlan } = context;

  const alreadyAdded = myPlan.some((item) => item.id === workoutSingleCard.id);

  const handleAddToPlan = () => {
    const added = addToPlan(workoutSingleCard);

    if (added) {
      toast.success("Added to today's plan");
    } else {
      toast.error("Already added to today's plan");
    }
  };

  return (
    <div>
      <button
        onClick={handleAddToPlan}
        disabled={alreadyAdded}
        className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all ${
          alreadyAdded
            ? "cursor-not-allowed bg-[#292D34] text-gray-400"
            : "bg-[#C2F800] text-black hover:bg-[#B0E000]"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>

        {alreadyAdded ? "Already in Plan" : "Add to today's plan"}
      </button>
    </div>
  );
};

export default AddToPlanButton;
