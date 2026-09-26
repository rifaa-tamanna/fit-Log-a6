import LibraryCard from "../shared/LibraryCard";
import { ILibrary } from "@/type/libraryType";

const getLibraryData = async () => {
  const response = await fetch("http://localhost:3000/libraryData.json");

  const data = await response.json();
  return data;
};

const TheLibrary = async () => {
  const libraryDatas = await getLibraryData();

  return (
    <section id="library" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto my-5">
        <h1 className="font-oswald text-white text-[30px] font-bold">
          THE LIBRARY
        </h1>

        <p className="font-inter text-[14px] text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Library Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 mb-20">
        {libraryDatas.map((libraryData: ILibrary, ind: number) => {
          return <LibraryCard key={ind} libraryData={libraryData} />;
        })}
      </div>
    </section>
  );
};

export default TheLibrary;
