import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
export default function Nav() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-between">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>

      {/* Burger button */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 md:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}
      <div
        className={`${
          isMobileMenuShown === false && "hidden"
        } w-full md:block md:w-auto`}
      >
        <ul className="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-lg md:flex-row md:space-x-8 md:border-none md:bg-transparent">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`cursor-pointer rounded px-3 py-2 md:hover:bg-transparent md:hover:text-blue-500 ${
                  i === 0
                    ? "bg-blue-500 text-white md:bg-transparent md:text-blue-500 "
                    : "hover:bg-gray-100"
                } ${(i == 3 || i == 4) && "md:text-white"}`}
                key={route}
              >
                <a>{route}</a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Cart button */}
      <div className="fixed bottom-4 left-4 md:static md:mr-8">
        <div className="flex-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
