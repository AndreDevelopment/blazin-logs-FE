const NavBar = () => {
  return (
    <div className="w-full py-8 px-4 bg-slate-800">
      <div className="max-w-[1240px] mx-auto flex flex-row">
        <h1 className="md:text-4xl 3xl">Blazin' Brawler Logs</h1>
        <div>
          <button>Refresh</button>
          <button>Update</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
