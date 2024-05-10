/* eslint-disable no-unused-vars */
import { BiMoon, BiSun } from "react-icons/bi"
import { useEffect, useState } from "react"

import Nav from "./components/Nav"
import NewArrivalsSection from "./components/NewArrivalsSection"
import ShoeDetail from "./components/ShoeDetail"
import Sidebar from "./components/Sidebar"
import { CartItem } from "./components/CartItem"

import { SHOE_LIST } from "./constant"

function App() {
  console.log(SHOE_LIST[0])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[1])

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode")
    if (isDarkMode) {
      window.document.documentElement.classList.add("dark")
    }
  }, [])

  function toggleDarkMode() {
    window.document.documentElement.classList.toggle("dark")
    if (window.document.documentElement.classList.contains("dark")) {
      localStorage.setItem("isDarkMode", "true")
    }
  }

  return (
    <div className="md:px24 animate-fadeIn bg-slate-100 p-4 dark:bg-night-50 sm:px-14">
      <Nav sidebarSetter={setIsSidebarOpen} />
      <ShoeDetail shoe={currentShoe} />
      <NewArrivalsSection items={SHOE_LIST} onClickCard={setCurrentShoe} />
      <Sidebar sidebarStatus={isSidebarOpen} sidebarSetter={setIsSidebarOpen}>
        <h2 className="mb-10 text-2xl font-bold dark:text-white">Cart</h2>
        <CartItem item={SHOE_LIST[0]} />
        <CartItem item={SHOE_LIST[3]} />
        <CartItem item={SHOE_LIST[2]} />
      </Sidebar>

      {/* toggle dark mode */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="rounded-full border border-gray-300 bg-night-50 px-4 py-2 text-white shadow-lg dark:bg-white dark:text-night-50"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  )
}

export default App
