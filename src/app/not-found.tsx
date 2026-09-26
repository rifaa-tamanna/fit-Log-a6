import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#0C0D10] flex items-center justify-center px-6">
      <div className="text-center">
        {/* Error Code */}
        <p className="font-oswald text-sm font-semibold tracking-[4px] text-[#C2F800] mb-4">
          ERROR 404
        </p>

        {/* Heading */}
        <h1 className="font-oswald text-4xl sm:text-4xl md:text-6xl font-bold text-white tracking-wide">
          PAGE NOT FOUND
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-md mx-auto font-inter text-sm sm:text-base leading-6 text-slate-400">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C2F800] px-6 py-3 font-inter text-sm font-semibold text-black transition hover:bg-white"
        >
          <span>←</span>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
