import Image from "next/image";
import bannerImage from '@/assets/banner.png'

const Banner = () => {
  return (
    <div className="hero bg-black ">
      <div className="hero-content w-full max-w-7xl min-h-[500px] mx-auto my-[50px] px-20 py-10 bg-[#15171D] rounded-2xl flex-col lg:flex-row-reverse lg:justify-between">
        {/* Banner Image */}
        <Image
          className="w-[350px] lg:w-[400px] h-auto object-contain"
          src={bannerImage}
          alt="FitLog workout"
          width={400}
          height={400}
        />

        {/* Banner Content */}
        <div className="max-w-[600px]">
          <h3 className="mb-[20px] text-[#C2F800] font-inter">
            WORKOUT LIBRARY
          </h3>

          <h1 className="text-3xl lg:text-5xl text-white font-bold font-oswald">
            TRAIN WITH INTENT. LOG <br />
            EVERY SET.
          </h1>

          <p className="py-6 text-[#9CA3AF] font-inter leading-6">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <button className="btn bg-[#C2F800] hover:bg-[#a9d900] text-black text-[14px] border-none font-semibold">
            BROWSE WORKOUTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
