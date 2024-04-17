import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const Searchbar = () => {
  return (
    <div className="flex h-14 items-center">
      <input
        type="text"
        className="w-1/6 h-10 rounded-lg ml-auto mr-0 focus:outline-none focus:border-none focus:ring-slate-400 border-slate-400"
        placeholder="Search"
      />
      <MagnifyingGlassIcon className="h-5 w-5 absolute right-28 text-slate-400"></MagnifyingGlassIcon>
    </div>
  );
}