export const Subbar = () => {
  return (
    <div className="flex h-14 items-center mb-2">
      <p className="text-2xl ml-10 font-bold">Your hiring position</p>
      <button className="ml-auto yellow-gradient text-white active:bg-amber-600 focus:border-amber-400 focus:outline-none focus:ring focus:ring-amber-300 hover:border-none uppercase">ADD NEW POSITION</button>
    </div>
  );
};
