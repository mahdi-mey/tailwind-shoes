import { useState } from "react";
import Select from "./Select";
import { QTY } from "../constant";

export default function ShoeDetail({ shoe, onClickAdd }) {
  const [form, setForm] = useState({qty: null, size: null})
  
  return (
    <div className="flex flex-col space-y-4 dark:text-white md:flex-row-reverse">
      {/* Shoe image */}
      <div className="flex-1 md:-mt-32 md:ml-28">
        <div className="flex-center h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img src={shoe.src} className="animate-float" />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        {/* Shoe text details */}
        <div className="text-5xl font-black md:text-9xl">{shoe.title}</div>
        <div className="font-medium md:text-xl">{shoe.description}</div>

        <div className="flex space-x-6">
          <div className="text-3xl font-extrabold md:text-6xl">
            {shoe.price} $
          </div>

          <Select onChange={(qty) => setForm({...form, qty})} title="QTY" options={[41, 42, 43, 44, 45]} />
          <Select onChange={(size) => setForm({...form, size})} title="SIZE" options={[1, 2, 3, 4, 5]} />
        </div>

        {/* Shoe buttons and links */}
        <div className="space-x-10">
          <button className="btn-press-anim h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white dark:text-black" onClick={() => onClickAdd(shoe, form.qty, form.size)}>
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
  )
}
