import nike1 from "../assets/n1-min.png";

export default function ShoeDetail() {
  return (
    <div className="flex-1 flex-col space-y-4 md:flex-row-reverse">
      <div className="flex">
        <img src={nike1} alt="" />
      </div>

      <div>
        <div className="flex-1 text-5xl md:text-9xl">
          Nike Air VaporMax Plus
        </div>
        <div className="text-xl md:font-medium">
          The Nike Air VaporMax Plus looks to the past and propels you into the
          future.
        </div>
        <div className="text-3xl font-extrabold md:text-6xl  ">100$</div>
        <div className="space-x-5">
          <button className="rounded-lg bg-green-700 px-5 py-3 text-white transition-all hover:bg-green-800">
            Add To Bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
