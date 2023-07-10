import homeStageImage from "../assets/home-stage-image.jpg";

export default function Home() {
  return (
    <div
      className="h-screen bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${homeStageImage})` }}
    >
      <div className="flex-col justify-center items-center bg-gray-300 bg-opacity-80">
        <h1 className="flex justify-center text-5xl px-10 mt-5">Album Booth</h1>
        <p className="flex justify-center mt-5 text-xl italic">
          Collect Moments, not Things!
        </p>
        <a href="/upload" className="flex justify-center mt-3">
          <button className="bg-blue-900 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full mb-5">
            Start now
          </button>
        </a>
      </div>
    </div>
  );
}
