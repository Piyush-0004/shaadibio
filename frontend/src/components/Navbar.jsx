import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between px-4 sm:px-10 py-4 bg-pink-200 shadow-md sticky top-0 z-50">

      {/* Logo */}
      <Link to="/" className="font-bold text-2xl text-pink-600">
        ShaadiBio
      </Link>

      {/* Buttons */}
      <div className="flex gap-3 mt-3 sm:mt-0">

        <Link to="/login">
          <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition">
            Login
          </button>
        </Link>

        <Link to="/create-biodata">
          <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition">
            Create Biodata
          </button>
        </Link>

      </div>

    </nav>
  )
}

export default Navbar