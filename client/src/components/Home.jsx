import React from "react";
import { Link } from "react-router-dom";
import homeStageImage from "../assets/home-stage-image.jpg";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="relative flex min-h-screen ">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homeStageImage})`, zIndex: -1 }}
      ></div>
      <div className="flex flex-grow flex-col items-center justify-center bg-center">
        <div className="flex flex-col items-center justify-center rounded-sm bg-stone-400 bg-opacity-80 p-6 sm:p-8 md:p-10 ">
          <h1 className="mb-5 text-center text-3xl sm:text-4xl md:text-5xl">
            Album Booth
          </h1>
          <p className="mb-5 text-center text-lg italic sm:text-xl">
            Collect Moments, not Things!
          </p>
          <Link to="/upload" className="flex justify-center">
            <button className="rounded-md bg-stone-900 px-4 py-2 font-bold text-white hover:bg-stone-700">
              Start now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
