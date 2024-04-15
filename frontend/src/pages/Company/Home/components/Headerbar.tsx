import { ArrowLeftCircleIcon, BellAlertIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
export const Headerbar = () => {
  return (
    <div className="flex h-14 items-center">
      <a href="">
        <ArrowLeftCircleIcon className="h-8 w-8 ml-5 text-slate-500"></ArrowLeftCircleIcon>
      </a>
      <input
        type="text"
        className="w-1/6 h-10 rounded-lg ml-auto mr-0"
        placeholder="Search"
      ></input>
      <MagnifyingGlassIcon className="h-8 w-8 absolute right-28"></MagnifyingGlassIcon>
      <a href="" className="mr-11 ml-6">
        <BellAlertIcon className="h-8 w-8"></BellAlertIcon>
      </a>
    </div>
  );
};
