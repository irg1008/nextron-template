const Titlebar = () => {
  return (
    <div className="bg-primary shadow-primary/30 text-primary-content fixed top-0 left-0 z-[10000] h-[30px] w-full shadow-md [-webkit-app-region:drag] [-webkit-user-select:none]">
      <div className="[-webkit-app-region:no-drag]">
        {/* Anything needed inside the title bar */}
      </div>
    </div>
  );
};

export default Titlebar;
