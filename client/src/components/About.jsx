import React from "react";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-stone-100 font-sans font-bold text-gray-800">
      <div className="flex flex-col justify-center bg-stone-400 rounded-md">
        <h1 className="md:p-10text-4xl p-6 text-2xl sm:p-8 sm:text-3xl">
          About Us:
        </h1>
        <p className="p-4 text-base sm:p-6 sm:text-lg md:p-8 md:text-xl">
          We are Full-Stack Developers from WBS Coding School.
        </p>
        <p className="p-4 text-base sm:p-6 sm:text-lg md:p-8 md:text-xl">
          Claudia (WDG#11), Omid (WDG#11)
        </p>
        <p className="p-4 text-base sm:p-6 sm:text-lg md:p-8 md:text-xl">
          Merve (WD#40), Federico (WD#39)
        </p>
        <p className="p-4 text-base sm:p-6 sm:text-lg md:p-8 md:text-xl">
          And we created this app in about 6 hours during the Crossover day.
        </p>
      </div>
    </div>
  );
}
