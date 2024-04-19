import {
  BuildingOffice2Icon,
  Cog6ToothIcon,
  DocumentChartBarIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { useAppSelector } from "libs/redux";
import { LogoutButton } from "pages/components";
import { SidebarButton } from "pages/components";

export const Sidebar = () => {
  const currentPage = useAppSelector((state) => state.company.currentPage);
  const options = [
    { text: "Company", path: "/staff/company", icon: <BuildingOffice2Icon className="h-5 w-5 me-1"></BuildingOffice2Icon> },
    { text: "Contract", path: "/staff/contract", icon: <DocumentTextIcon className="h-5 w-5 me-1"></DocumentTextIcon> },
    { text: "Report", path: "/staff/report", icon: <DocumentChartBarIcon className="h-5 w-5 me-1"></DocumentChartBarIcon> },
    { text: "Setting", path: "", icon: <Cog6ToothIcon className="h-5 w-5 me-1"></Cog6ToothIcon> }

  ];
  return (
    <div className="w-1/5 flex flex-col items-center h-full bg-amber-100 ">
      <h2 className="font-bold self-start mt-4 ms-6">STAFF</h2>
      {/* avatar section */}
      <div className="flex flex-col items-center mt-11">
        <img
          src="https://product.hstatic.net/200000459373/product/banh-sandwich-staff-goi-110g-202111291340116602_109c43f3d95748158735c4f761ede041_master.jpg"
          alt=""
          className="h-32 w-32 rounded-full"
        />
        <p className="font-extrabold mt-4">CONG KHANH</p>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 mt-20">
        {options.map((option) => (
          <SidebarButton
            key={option.text}
            icon={option.icon}
            text={option.text}
            active={option.text === currentPage}
            nextPath={option.path}
          />
        ))}
      </div>

      <div className="flex flex-col items-center mb-1 mt-36">
        <LogoutButton />
      </div>
    </div>
  );
};
