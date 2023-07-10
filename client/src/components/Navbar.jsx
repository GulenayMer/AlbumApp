export default function Navbar() {
  return (
    <nav className="flex row justify-between bg-blue-900">
      <div className="p-2 text-center text-white">
        <a href="/" className="mx-2">
          <i className="fa-solid fa-book"> Album Booth</i>
        </a>
      </div>
      <div>
        <ul className="flex row ">
          <li className="py-2 px-4 text-center text-white hover:bg-blue-400">
            <a href="/">Home</a>
          </li>
          <li className="py-2 px-4 text-center text-white hover:bg-blue-400">
            <a href="/upload">Upload</a>
          </li>
          <li className="py-2 px-4 text-center text-white hover:bg-blue-400">
            <a href="/my-albums">My Albums</a>
          </li>
          <li className="py-2 px-4 text-center text-white mr-5 hover:bg-blue-400">
            <a href="/about-us">About us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
