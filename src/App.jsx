/* eslint-disable no-unused-vars */
import { useState } from "react";
import Nav from "./components/Nav";
import NewArrivalsSection from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constant";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="md:px24 animate-fadeIn bg-slate-100 p-4 sm:px-14">
      <Nav sidebarSetter={setIsSidebarOpen} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar sidebarStatus={isSidebarOpen} sidebarSetter={setIsSidebarOpen}>
        hi
      </Sidebar>
    </div>
  );
}

export default App;
