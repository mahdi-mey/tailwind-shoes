import Select from "./Select"
import { CiTrash } from "react-icons/ci"
import { QTY, SIZES } from "../constant"

export function CartItem({ item, qty, size }) {
  console.log(item)

  return (
    <div className="cursor-pointer bg-gray-50 p-2 hover:bg-[#DAFFA2] dark:bg-transparent dark:hover:bg-gray-700">
      <div>
        <div className="flex space-x-2 ">
          {/* Image */}
          <img className="h-24" src={item.product.src} />
          {/* Title and description */}
          <div className="space-y-2">
            <div className="font-bold dark:text-white">{item.product.title}</div>
            <div className="text-sm text-gray-400">{item.product.description}</div>
          </div>
          {/* price */}
          <div className="font-bold dark:text-white">{item.product.price}$</div>
        </div>

        <div className="flex justify-between gap-2 pl-32">
          {/* Inputs */}
          <div className="flex space-x-6">
            {/* QTY input */}
            <div className="mt-2 space-y-1">
              <div className="font-bold dark:text-white">QTY</div>
              <Select title="SIZES" options={QTY} value={item.qty} />
            </div>
            {/* SIZE input */}
            <div className="mt-2 space-y-1">
              <div className="font-bold dark:text-white">SIZE</div>
              <Select title="QTY" options={SIZES} value={item.size} />
            </div>
          </div>
          {/* Trash icon */}
          <button className="flex-center mt-6">
            <CiTrash size={25} className="text-black dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
