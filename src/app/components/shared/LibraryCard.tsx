import { ILibrary } from "@/type/libraryType";
import Image from "next/image";
import Link from "next/link";

interface libraryDataProps {
  libraryData: ILibrary;
}

const LibraryCard = ({ libraryData }: libraryDataProps) => {
  return (
    <Link href={`/workout/${libraryData.id}`} className="block h-full">
      <div className="card w-full h-full overflow-hidden rounded-2xl bg-[#15171d] border border-[#292c34] shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-[#baff00] hover:shadow-lg">
        {/* Image */}
        <figure className="w-full h-[200px] sm:h-[220px] md:h-[230px] lg:h-[240px]">
          <Image
            src={libraryData.image}
            alt={libraryData.name}
            width={500}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </figure>

        {/* Card Content */}
        <div className="p-4 sm:p-5">
          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-2 mb-4">
            {libraryData.muscleGroups.map((muscle, index) => (
              <div
                key={index}
                className="badge bg-[#baff00] border-none font-inter text-black font-semibold text-xs px-3 py-3"
              >
                {muscle}
              </div>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-lg sm:text-xl font-bold uppercase font-oswald text-white tracking-wide">
            {libraryData.name}
          </h2>

          {/* Equipment */}
          <p className="mt-1 text-sm text-gray-400">{libraryData.equipment}</p>

          {/* Divider */}
          <div className="border-t border-[#292c34] my-4"></div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-sm text-gray-400">
            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <span>◷</span>
              <span>{libraryData.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5">
              <span>𐐘</span>
              <span>{libraryData.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <span>☆</span>
              <span>{libraryData.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LibraryCard;

