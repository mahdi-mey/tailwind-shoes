export default function Sidebar({ children, sidebarStatus, sidebarSetter }) {
  return (
    <>
      <div
        className={`p-8 translate fixed right-0 top-0 z-50 h-full w-full bg-blue-300 shadow-lg transition md:w-1/2 lg:w-1/3 ${sidebarStatus ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => sidebarSetter(false)}
          className="absolute right-4 top-4 cursor-pointer bg-gray-50/20 w-10 h-10 text-2xl font-extrabold rounded-full"
        >
          X
        </button>

        <br />
        <div className="text-lg">{children}</div>
      </div>
      {sidebarStatus && (
        <div className="fixed inset-0 z-20 bg-black opacity-50"></div>
      )}
    </>
  );
}
