"use client";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { ILibrary } from "@/type/libraryType";
import { useContext } from "react";
import { toast } from "react-toastify";

const SavedForLater = ({
  workoutSingleCard,
}: {
  workoutSingleCard: ILibrary;
}) => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    return null;
  }

  const { saved, saveForLater } = context;

  const alreadySaved = saved.some((item) => item.id === workoutSingleCard.id);

  const handleSaveForLater = () => {
    const added = saveForLater(workoutSingleCard);

    if (added) {
      toast.success("Saved for later");
    } else {
      toast.error("Already saved");
    }
  };

  return (
    <div>
      <button
        onClick={handleSaveForLater}
        disabled={alreadySaved}
        className={`flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-all ${
          alreadySaved
            ? "cursor-not-allowed border-[#292D34] bg-[#292D34] text-gray-500"
            : "border-gray-800 bg-[#16181E] text-gray-300 hover:bg-[#20242D]"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>

        {alreadySaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
};

export default SavedForLater;
