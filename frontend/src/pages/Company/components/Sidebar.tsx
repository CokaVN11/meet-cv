import {
  Cog6ToothIcon,
  CurrencyDollarIcon,
  DocumentIcon,
  HomeIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { useAppSelector } from "libs/redux";

const SidebarButton = ({
  icon,
  text,
  active = false,
}: {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}) => {
  return (
    <button className={`${active ? 'bg-amber-500 text-white hover:bg-amber-500': 'bg-transparent'} w-full hover:bg-amber-400 flex justify-start gap-2 items-center hover:border-amber-400 focus:outline-none focus:ring-amber-500 font-medium text-sm`}>
      {icon}
      {text}
    </button>
  );
};

export const Sidebar = () => {
  const currentPage = useAppSelector((state) => state.company.currentPage);
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
          active={currentPage === "Home"}
        />
        <SidebarButton
          icon={<UserIcon className="h-5 w-5 me-1"></UserIcon>}
          text="Position"
          active={currentPage === "Position"}
        />
        <SidebarButton
          icon={
            <CurrencyDollarIcon className="h-5 w-5 me-1"></CurrencyDollarIcon>
          }
          text="Payment"
          active={currentPage === "Payment"}
        />
        <SidebarButton
          icon={<UserGroupIcon className="h-5 w-5 me-1"></UserGroupIcon>}
          text="Employee"
          active={currentPage === "Employee"}
        />
        <SidebarButton
          icon={<DocumentIcon className="h-5 w-5 me-1"></DocumentIcon>}
          text="Proposal"
          active={currentPage === "Proposal"}
        />
        <SidebarButton
          icon={<Cog6ToothIcon className="h-5 w-5 me-1"></Cog6ToothIcon>}
          text="Setting"
          active={currentPage === "Setting"}
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
