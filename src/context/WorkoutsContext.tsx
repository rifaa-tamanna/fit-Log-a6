"use client";

import React, { createContext, useEffect, useState } from "react";
import { ILibrary } from "@/type/libraryType";
import { toast } from "react-toastify";

interface WorkoutsContextType {
  myPlan: ILibrary[];
  saved: ILibrary[];

  addToPlan: (workout: ILibrary) => boolean;
  saveForLater: (workout: ILibrary) => boolean;

  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;

  doneWorkouts: number[];
  markAsDone: (id: number) => void;
}

export const WorkoutsContext = createContext<WorkoutsContextType | undefined>(
  undefined,
);

const WorkoutsProvider = ({ children }: { children: React.ReactNode }) => {
  const [myPlan, setMyPlan] = useState<ILibrary[]>([]);
  const [saved, setSaved] = useState<ILibrary[]>([]);
  const [doneWorkouts, setDoneWorkouts] = useState<number[]>([]);

  // ================= LOAD DATA =================
  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");
    const storedDone = localStorage.getItem("fitlog-done");

    if (storedPlan) {
      setMyPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }

    if (storedDone) {
      setDoneWorkouts(JSON.parse(storedDone));
    }
  }, []);

  // ================= SAVE PLAN =================
  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(myPlan));
  }, [myPlan]);

  // ================= SAVE SAVED =================
  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  // ================= SAVE DONE =================
  useEffect(() => {
    localStorage.setItem("fitlog-done", JSON.stringify(doneWorkouts));
  }, [doneWorkouts]);

  // ================= ADD TO PLAN =================
  const addToPlan = (workout: ILibrary) => {
    const alreadyExists = myPlan.some((item) => item.id === workout.id);

    if (alreadyExists) {
      return false;
    }

    setMyPlan((prev) => [...prev, workout]);

    return true;
  };

  // ================= SAVE FOR LATER =================
  const saveForLater = (workout: ILibrary) => {
    const alreadySaved = saved.some((item) => item.id === workout.id);

    if (alreadySaved) {
      return false;
    }

    setSaved((prev) => [...prev, workout]);

    return true;
  };

  // ================= REMOVE FROM PLAN =================
  const removeFromPlan = (id: number) => {
    setMyPlan((prev) => prev.filter((item) => item.id !== id));

    // Also remove done status
    setDoneWorkouts((prev) => prev.filter((itemId) => itemId !== id));

    // Toast
    toast.warning("Removed from saved workouts"); 
  };

  // ================= REMOVE FROM SAVED =================
  const removeFromSaved = (id: number) => {
    setSaved((prev) => prev.filter((item) => item.id !== id));

    // Toast
    toast.warning("Removed from saved workouts");
  };

  // ================= MARK AS DONE =================
  const markAsDone = (id: number) => {
    setDoneWorkouts((prev) => {
      if (prev.includes(id)) {
        return prev;
      }

      return [...prev, id];
    });
  };

  return (
    <WorkoutsContext.Provider
      value={{
        myPlan,
        saved,
        addToPlan,
        saveForLater,
        removeFromPlan,
        removeFromSaved,
        doneWorkouts,
        markAsDone,
      }}
    >
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;
