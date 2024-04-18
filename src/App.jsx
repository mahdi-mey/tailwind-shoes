import Nav from "./components/Nav";
import ShoeDetail from "./components/ShoeDetail";

function App() {
  return (
    <div className="md:px24 bg-slate-100 p-4 sm:px-14 animate-fadeIn">
      <Nav />
      <ShoeDetail />
    </div>
  );
}

export default App;
