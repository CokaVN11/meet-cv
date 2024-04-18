import {
  ArrowLeftCircleIcon,
  BellAlertIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
export const Headerbar = () => {
  return (
    <div className="flex h-14 items-center">
      <a href="/">
        <ArrowLeftCircleIcon className="h-8 w-8 ml-5 text-slate-500"></ArrowLeftCircleIcon>
      </a>
      <input
        type="text"
        className="w-1/6 h-10 rounded-lg ml-auto mr-0 focus:outline-none focus:border-none focus:ring-slate-400 border-slate-400"
        placeholder="Search"
      />
      <MagnifyingGlassIcon className="h-5 w-5 absolute right-28 text-slate-400"></MagnifyingGlassIcon>
      <a href="/" className="mr-11 ml-6">
        <BellAlertIcon className="h-8 w-8 text-slate-400"></BellAlertIcon>
      </a>
    </div>
  );
};
