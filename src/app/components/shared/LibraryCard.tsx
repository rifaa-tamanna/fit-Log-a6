import { ILibrary } from "@/type/libraryType";
import Image from "next/image";
import Link from "next/link";

interface libraryDataProps {
  libraryData: ILibrary;
}




const LibraryCard = ({ libraryData }: libraryDataProps) => {
  return (
    <Link href={`/workout/${libraryData.id}`}>
      <div className="card w-full overflow-hidden rounded-2xl bg-[#15171d] border border-[#292c34] shadow-sm">
        {/* Image */}
        <figure className="w-full h-[220px] sm:h-[240px] md:h-[220px]">
          <Image
            src={libraryData.image}
            alt={libraryData.name}
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Card Content */}
        <div className="p-5">
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
          <h2 className="text-xl font-bold uppercase font-oswald text-white tracking-wide">
            {libraryData.name}
          </h2>

          {/* Equipment */}
          <p className="mt-1 text-sm text-gray-400">{libraryData.equipment}</p>

          {/* Divider */}
          <div className="border-t border-[#292c34] my-4"></div>

          {/* Stats */}
          <div className="flex items-center gap-5 text-sm text-gray-400">
            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <span>◷</span>
              <span>{libraryData.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5">
              <span>💦</span>
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
