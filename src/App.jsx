/* eslint-disable no-unused-vars */
import { useState } from "react";
import Nav from "./components/Nav";
import NewArrivalsSection from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
import { CartItem } from "./components/CartItem";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="md:px24 animate-fadeIn bg-slate-100 p-4 sm:px-14">
      <Nav sidebarSetter={setIsSidebarOpen} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar sidebarStatus={isSidebarOpen} sidebarSetter={setIsSidebarOpen}>
        <h2 className="text-2xl font-bold mb-10">Cart</h2>
        <CartItem item={SHOE_LIST[0]}/>
        <CartItem item={SHOE_LIST[3]}/>
        <CartItem item={SHOE_LIST[2]}/>
      </Sidebar>
    </div>
  );
}

export default App;
