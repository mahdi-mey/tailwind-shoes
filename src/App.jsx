/* eslint-disable no-unused-vars */
import { BiMoon, BiSun } from "react-icons/bi"
import { useEffect, useState } from "react"

import Nav from "./components/Nav"
import NewArrivalsSection from "./components/NewArrivalsSection"
import ShoeDetail from "./components/ShoeDetail"
import Sidebar from "./components/Sidebar"
import { CartItem } from "./components/CartItem"

import { SHOE_LIST } from "./constant"
import { Cart } from "./components/Cart"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[1])
  const [cartItems, setCartItems] = useState([])

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

  const addToCart = (product, qty, size) => {
    if (qty && size) {
      const updatedCartItems = [...cartItems]
      const existingItemIndex = cartItems.findIndex(item => item.id === product.id)
      if (existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].qty = qty
        updatedCartItems[existingItemIndex].size = size
      }
      else {
        updatedCartItems.push({product, qty, size})
      }

      setCartItems(updatedCartItems)
    }
    console.log(cartItems)
  }

  return (
    <div className="md:px24 animate-fadeIn bg-slate-100 p-4 dark:bg-night-50 sm:px-14">
      <Nav sidebarSetter={setIsSidebarOpen} />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart} />
      <NewArrivalsSection items={SHOE_LIST} onClickCard={setCurrentShoe} />
      {/* <Sidebar sidebarStatus={isSidebarOpen} sidebarSetter={setIsSidebarOpen}>
        <h2 className="mb-10 text-2xl font-bold dark:text-white">Cart</h2>
        <CartItem item={cartItems} />
        <CartItem item={cartItems} />
        <CartItem item={cartItems} />
      </Sidebar> */}

      <Sidebar
        sidebarStatus={isSidebarOpen}
        sidebarSetter={setIsSidebarOpen}
      >
        <Cart cartItems={cartItems} />
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
