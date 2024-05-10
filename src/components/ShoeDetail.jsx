import Select from "./Select";

export default function ShoeDetail({ shoe }) {
  console.log(shoe)
  return (
    <div className="flex flex-col space-y-4 md:flex-row-reverse dark:text-white">
      {/* Shoe image */}
      <div className="flex-1 md:-mt-32 md:ml-28">
        <div className="flex-center h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img src={shoe.src} className="animate-float" />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        {/* Shoe text details */}
        <div className="text-5xl font-black md:text-9xl">{shoe.title}</div>
        <div className="font-medium md:text-xl">
          {
            shoe.description
          }
        </div>

        <div className="flex space-x-6">
          <div className="text-3xl font-extrabold md:text-6xl">{shoe.price} $</div>

          <Select title="QTY" options={[41, 42, 43, 44, 45]} />
          <Select title="SIZE" options={[1, 2, 3, 4, 5]} />
        </div>

        {/* Shoe buttons and links */}
        <div className="space-x-10">
          <button className="h-14 w-44 dark:bg-white dark:text-black bg-black text-white hover:bg-gray-900 active:bg-gray-700 btn-press-anim">
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
}
