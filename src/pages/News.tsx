import { Link } from "react-router-dom";
import maharashtra from "../assets/maharashtra.webp";
import global from "../assets/global.webp"
import southeast from "../assets/southeast.webp"
import dmr from "../assets/dmrv.webp"
const NEWS = [
  {
    id: "1",
    title: "Ecoveda Launches New ARR Project in Maharashtra",
    date: "April 2026",
    tag: "Project Launch",
    image: maharashtra,
  },
  {
    id: "2",
    title: "Partnership Announced with Global Climate Fund",
    date: "March 2026",
    tag: "Partnership",
    image: global,
  },
  {
    id: "3",
    title: "Expansion into Southeast Asia Markets",
    date: "March 2026",
    tag: "Expansion",
    image: southeast,
  },
  {
    id: "4",
    title: "New DMRV Platform Successfully Deployed",
    date: "February 2026",
    tag: "Technology",
    image: dmr,
  },
];

export default function News() {
  return (
    <div className="pt-20">

      {/* HERO */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          News & Updates
        </h1>
        <p className="text-lg text-slate-300">
          Latest announcements, partnerships and project developments
        </p>
      </section>

      {/* NEWS LIST */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-10">

          {NEWS.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="group block"
            >
              <div className="grid md:grid-cols-3 gap-6 items-center bg-white rounded-xl shadow-md overflow-hidden">

                {/* IMAGE */}
                <div className="h-48 md:h-full">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="md:col-span-2 p-6">

                  <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold">
                    {item.tag}
                  </span>

                  <h2 className="text-xl font-bold text-slate-800 mt-3 group-hover:text-emerald-600 transition">
                    {item.title}
                  </h2>

                  <p className="text-sm text-slate-500 mt-2">
                    {item.date}
                  </p>

                </div>

              </div>
            </Link>
          ))}

        </div>
      </section>

    </div>
  );
}