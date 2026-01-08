import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-[#e0e0e0] dark:bg-[#121212] text-center">
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-gray-900 dark:text-white mb-4">
        404
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-2">
        Oops… looks like this page ghosted 👻
      </p>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        Nothing to see here, just me vibing on my portfolio. <br /> Let’s get you back home.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105 shadow-md hover:shadow-lg"
        style={{ backgroundColor: "greenyellow", color: "black" }}
      >
        Go Home
      </Link>
    </div>
  );
}
