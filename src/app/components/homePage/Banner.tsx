"use client";

import Image from "next/image";
import bannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="hero bg-black px-4 sm:px-6 lg:px-0">
      <div
        className="
          hero-content
          w-full
          max-w-7xl
          min-h-125
          mx-auto
          my-6 sm:my-8 lg:my-[50px]
          px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20
          py-8 sm:py-10
          bg-[#15171D]
          rounded-2xl

          flex
          flex-col
          lg:flex-row-reverse
          lg:justify-between
          lg:items-center

          gap-8
          lg:gap-12
        "
      >
        {/* Banner Image */}
        <Image
          className="
            w-[240px]
            sm:w-[300px]
            md:w-[340px]
            lg:w-[380px]
            xl:w-[400px]
            h-auto
            object-contain
            shrink-0
          "
          src={bannerImage}
          alt="FitLog workout"
          width={400}
          height={400}
          priority
        />

        {/* Banner Content */}
        <div
          className="
            w-full
            max-w-[600px]
            text-center
            lg:text-left
          "
        >
          <h3
            className="
              mb-4
              sm:mb-5
              text-sm
              sm:text-base
              text-[#C2F800]
              font-inter
            "
          >
            WORKOUT LIBRARY
          </h3>

          <h1
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              text-white
              font-bold
              font-oswald
              leading-tight
            "
          >
            TRAIN WITH INTENT. LOG
            <br className="hidden sm:block" />
            EVERY SET.
          </h1>

          <p
            className="
              py-5
              sm:py-6
              text-sm
              sm:text-base
              text-[#9CA3AF]
              font-inter
              leading-6
            "
          >
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <button
            onClick={() => {
              document.getElementById("library")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="
              btn
              bg-[#C2F800]
              hover:bg-[#a9d900]
              text-black
              text-[13px]
              sm:text-[14px]
              border-none
              font-semibold
              px-5
              sm:px-6
            "
          >
            BROWSE WORKOUTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
