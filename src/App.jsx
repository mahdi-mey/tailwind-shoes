import Nav from "./components/Nav";
import NewArrivalsSection from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";
// import Cart from './components/Cart'
import { SHOE_LIST } from './constant';

function App() {
  return (
    <div className="md:px24 bg-slate-100 p-4 sm:px-14 animate-fadeIn">
      <Nav />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
    </div>
  );
}

export default App;
