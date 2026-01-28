import menImg from "../assets/editor/men.jpg";
import womenImg from "../assets/editor/women.jpg";
import accessoriesImg from "../assets/editor/accessories.jpg";
import kidsImg from "../assets/editor/kids.jpg";

export default function EditorPick() {
  return (
    <section className="flex flex-col items-center px-4 py-16 gap-10">

      {/* TITLE */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-xl font-bold tracking-wide">
          EDITOR’S PICK
        </h2>
        <p className="text-sm text-gray-500">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-[1200px]">

        {/* MEN */}
        <div
            className="
            flex items-end
            h-[460px]        /* MOBİL */
            lg:h-[180px]     /* DESKTOP */
            lg:flex-1
            bg-cover bg-center p-6
            "
            style={{ backgroundImage: `url(${menImg})` }}
            >
            <span className="bg-white px-6 py-2 text-sm font-bold">MEN</span>
        </div>


        {/* WOMEN */}
        <div
         className="
          flex items-end
          h-[520px]        /* MOBİL */
          lg:h-[180px]     /* DESKTOP */
          lg:flex-1
          bg-cover bg-center p-6
           "
           style={{ backgroundImage: `url(${womenImg})` }}
            >
            <span className="bg-white px-6 py-2 text-sm font-bold">WOMEN</span>
        </div>


        {/* RIGHT COLUMN */}
        <div className="flex flex-col flex-1 gap-6">

          {/* ACCESSORIES */}
          <div
            className="flex items-end h-[240px] bg-cover bg-center p-6"
            style={{ backgroundImage: `url(${accessoriesImg})` }}
          >
            <span className="bg-white px-4 py-2 text-sm font-bold">
              ACCESSORIES
            </span>
          </div>

          {/* KIDS (ONLY UNDER ACCESSORIES) */}
          <div
            className="flex items-end h-[240px] bg-cover bg-center p-6"
            style={{ backgroundImage: `url(${kidsImg})` }}
          >
            <span className="bg-white px-6 py-2 text-sm font-bold">
              KIDS
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
