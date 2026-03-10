import { Link } from "react-router-dom"
import template1 from "../assets/template1.webp"
import template2 from "../assets/template2.webp"

function TemplatePreview() {
  return (
    <section className="py-24 px-4 bg-red-200 text-center">

      <h2 className="font-semibold text-3xl sm:text-4xl italic">
        Popular Marriage Biodata Designs
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-10">

        <Link to="/create-biodata" className="relative group">
          <img
            src={template1}
            alt="template1"
            className="w-48 sm:w-56 cursor-pointer hover:scale-105 transition"
          />

          <span className="absolute inset-0 flex items-center justify-center 
          bg-black/40 text-white font-semibold opacity-0 
          group-hover:opacity-100 transition italic text-2xl">
            Edit
          </span>
        </Link>

        <Link to="/create-biodata" className="relative group">
          <img
            src={template2}
            alt="template2"
            className="w-48 sm:w-56 cursor-pointer hover:scale-105 transition"
          />

          <span className="absolute inset-0 flex items-center justify-center 
          bg-black/40 text-white font-semibold opacity-0 
          group-hover:opacity-100 transition italic text-2xl">
            Edit
          </span>
        </Link>

      </div>

    </section>
  )
}

export default TemplatePreview