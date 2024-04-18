export const Subbar = ({ label, onClickHandler }: { label: string, onClickHandler?: () => void }) => {
  return (
    <div className="flex h-14 items-center mb-2 mt-8">
      <p className="text-2xl font-bold">{label}</p>
      <button className="ml-auto yellow-gradient text-white active:bg-amber-600 focus:border-amber-400 focus:outline-none focus:ring focus:ring-amber-300 hover:border-none uppercase" onClick={onClickHandler}>ADD NEW COMPANY</button>
    </div>
  );
};
