import {
  Cog6ToothIcon,
  CurrencyDollarIcon,
  DocumentIcon,
  HomeIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";

const SidebarButton = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <button className="w-full bg-transparent hover:bg-amber-400 flex justify-start gap-2 items-center hover:border-none focus:outline-none focus:ring-amber-500 font-medium text-sm">
      {icon}
      {text}
    </button>
  );
};

export const Sidebar = () => {
  return (
    <div className="w-1/5 flex flex-col items-center h-full bg-amber-100 ">
      <h2 className="font-bold self-start mt-4 ms-6">COMPANY</h2>
      {/* avatar section */}
      <div className="flex flex-col items-center mt-11">
        <img
          src="https://logowik.com/content/uploads/images/952_astonmartin.jpg"
          alt=""
          className="h-32 w-32 rounded-full"
        />
        <p className="font-extrabold mt-4">ASTON MARTIN</p>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 mt-20">
        <SidebarButton
          icon={<HomeIcon className="h-5 w-5 me-1"></HomeIcon>}
          text="Home"
        />
        <SidebarButton
          icon={<UserIcon className="h-5 w-5 me-1"></UserIcon>}
          text="Position"
        />
        <SidebarButton
          icon={
            <CurrencyDollarIcon className="h-5 w-5 me-1"></CurrencyDollarIcon>
          }
          text="Payment"
        />
        <SidebarButton
          icon={<UserGroupIcon className="h-5 w-5 me-1"></UserGroupIcon>}
          text="Employee"
        />
        <SidebarButton
          icon={<DocumentIcon className="h-5 w-5 me-1"></DocumentIcon>}
          text="Proposal"
        />
        <SidebarButton
          icon={<Cog6ToothIcon className="h-5 w-5 me-1"></Cog6ToothIcon>}
          text="Setting"
        />
      </div>

      <div className="flex flex-col items-center mb-1 mt-36">
        <SidebarButton
          icon={
            <ArrowLeftOnRectangleIcon className="h-5 w-5 me-1"></ArrowLeftOnRectangleIcon>
          }
          text="Log out"
        />
      </div>
    </div>
  );
};
