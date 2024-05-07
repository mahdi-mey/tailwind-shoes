export default function Sidebar({ children, sidebarStatus, sidebarSetter }) {
  return (
    <>
      <div
        className={`dark:bg-night-50 translate fixed right-0 top-0 z-50 h-full w-full overflow-y-scroll bg-blue-300 p-8 shadow-lg transition md:w-1/2 lg:w-1/3 ${sidebarStatus ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => sidebarSetter(false)}
          className="absolute right-4 top-4 h-10 w-10 cursor-pointer rounded-full bg-gray-50/20 text-2xl font-extrabold"
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
