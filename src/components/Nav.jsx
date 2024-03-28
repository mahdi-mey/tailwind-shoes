import { useState } from "react";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbShoppingBag } from "react-icons/tb";

const ROUTES = ["HOME", "ABOUT", "SERVICES", "PRICING", "CONTACT"];

export default function Nav() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between">
      <a href="">
        <NikeLogo className="h-20 w-20" />
      </a>
      <button
        onClick={() => setIsMobileMenuShown((prevValue) => !prevValue)}
        className="rounded-lg p-2 focus:ring-2 focus:ring-gray-200 md:hidden"
      >
        <RxHamburgerMenu size={30} />
      </button>

      <div
        className={`w-full md:block md:w-auto ${isMobileMenuShown === false ? " hidden" : ""}`}
      >
        <ul className="bg-gray-50-50 flex flex-col rounded-lg border border-gray-200 p-4 text-sm md:flex-row md:border-none md:text-base">
          {ROUTES.map((route, index) => {
            return (
              <li
                className={`rounded-lg px-3 py-2 ${index === 0 ? "bg-blue-400 text-white" : "cursor-pointer hover:bg-gray-200"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="fixed bottom-4 left-4 rounded-full bg-white p-2 shadow-sm shadow-gray-500 md:static">
        <TbShoppingBag />
      </div>
    </nav>
  );
}
