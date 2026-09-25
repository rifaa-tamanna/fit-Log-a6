import Image from "next/image";

interface IWorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getLibraryData = async (id: string) => {
  const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const data = await response.json();
  return data;
};

const workoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;

  const workoutSingleCard = await getLibraryData(id);

  return (
    <div className="min-h-screen bg-[#0d0f12] text-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:gap-10">
          {/* ================= IMAGE ================= */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-xl border border-[#292c34]">
              <Image
                src={workoutSingleCard.image}
                alt={workoutSingleCard.name}
                width={700}
                height={700}
                className="h-auto max-h-[700px] w-full object-cover"
              />
            </div>
          </div>

          {/* ================= DETAILS ================= */}
          <div className="flex flex-col">
            {/* Title */}
            <h1 className="text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl">
              {workoutSingleCard.name}
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              {workoutSingleCard.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-4 flex flex-wrap gap-2">
              {workoutSingleCard.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#baff00] px-3 py-1 text-xs font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* ================= INFO BOX ================= */}
            <div className="mt-6 overflow-hidden rounded-xl border border-[#292c34] bg-[#15181e]">
              {/* Equipment */}
              <div className="flex items-center justify-between border-b border-[#292c34] px-5 py-4">
                <span className="text-[11px] font-bold uppercase tracking-wide text-gray-500">
                  Equipment
                </span>

                <span className="text-sm text-gray-300">
                  {workoutSingleCard.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex items-center justify-between border-b border-[#292c34] px-5 py-4">
                <span className="text-[11px] font-bold uppercase tracking-wide text-gray-500">
                  Difficulty
                </span>

                <span className="text-sm text-gray-300">
                  {workoutSingleCard.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex items-center justify-between border-b border-[#292c34] px-5 py-4">
                <span className="text-[11px] font-bold uppercase tracking-wide text-gray-500">
                  Sets
                </span>

                <span className="text-sm text-gray-300">
                  {workoutSingleCard.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="flex items-center justify-between border-b border-[#292c34] px-5 py-4">
                <span className="text-[11px] font-bold uppercase tracking-wide text-gray-500">
                  Reps
                </span>

                <span className="text-sm text-gray-300">
                  {workoutSingleCard.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between border-b border-[#292c34] px-5 py-4">
                <span className="text-[11px] font-bold uppercase tracking-wide text-gray-500">
                  Duration
                </span>

                <span className="text-sm text-gray-300">
                  {workoutSingleCard.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex items-center justify-between border-b border-[#292c34] px-5 py-4">
                <span className="text-[11px] font-bold uppercase tracking-wide text-gray-500">
                  Calories
                </span>

                <span className="text-sm text-gray-300">
                  {workoutSingleCard.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-[11px] font-bold uppercase tracking-wide text-gray-500">
                  Rating
                </span>

                <span className="text-sm text-gray-300">
                  {workoutSingleCard.rating}
                </span>
              </div>
            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-7">
              <h2 className="text-sm font-bold uppercase tracking-wide text-white">
                Instructions
              </h2>

              <div className="mt-4 space-y-4">
                {workoutSingleCard.instructions.map((instruction, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-sm leading-6 text-gray-400"
                  >
                    <span className="shrink-0 text-xs font-bold text-gray-500">
                      {index + 1}.
                    </span>

                    <p>{instruction}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= BUTTONS ================= */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button className="flex h-12 items-center justify-center rounded-lg bg-[#baff00] px-6 text-sm font-bold text-black transition hover:bg-[#a9eb00]">
                <span className="mr-2">▣</span>
                Add to today's plan
              </button>

              <button className="flex h-12 items-center justify-center rounded-lg border border-[#30343d] bg-transparent px-6 text-sm font-medium text-gray-300 transition hover:bg-[#171a20]">
                <span className="mr-2">♡</span>
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default workoutDetailsPage;
