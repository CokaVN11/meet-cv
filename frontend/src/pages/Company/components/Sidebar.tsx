import {
  Cog6ToothIcon,
  CurrencyDollarIcon,
  DocumentIcon,
  HomeIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "libs/redux";
import { clearAuth } from "libs/redux/sliceAuth";
import { setCurrentPage } from "libs/redux/sliceCompany";
import { LogoutButton } from "pages/components";
import { useNavigate } from "react-router-dom";
import { CompanyPageTitle } from "types/index";

const SidebarButton = ({
  icon,
  text,
  active = false,
  nextPath
}: {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  nextPath?: string;
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onClickHandler = () => {
    if (text === "Log out") {
      dispatch(clearAuth());
    }
    else {
      dispatch(setCurrentPage(text as CompanyPageTitle));
      if (nextPath) {
        navigate(nextPath);
      }
    }
  }
  return (
    <button className={`${active ? 'bg-amber-500 text-white hover:bg-amber-500': 'bg-transparent'} w-full hover:bg-amber-400 flex justify-start gap-2 items-center hover:border-amber-400 focus:outline-none focus:ring-amber-500 font-medium text-sm rounded-lg`} onClick={onClickHandler}>
      {icon}
      {text}
    </button>
  );
};

export const Sidebar = () => {
  const currentPage = useAppSelector((state) => state.company.currentPage);
  const options = [
    { text: "Home", path: "/company", icon: <HomeIcon className="h-5 w-5 me-1"></HomeIcon> },
    { text: "Position", path: "/company/position", icon: <UserIcon className="h-5 w-5 me-1"></UserIcon> },
    { text: "Payment", path: "/company/payment", icon: <CurrencyDollarIcon className="h-5 w-5 me-1"></CurrencyDollarIcon> },
    { text: "Employee", path: "/company/employee", icon: <UserGroupIcon className="h-5 w-5 me-1"></UserGroupIcon> },
    { text: "Proposal", path: "/company/proposal", icon: <DocumentIcon className="h-5 w-5 me-1"></DocumentIcon> },
    { text: "Setting", path: "/company/setting", icon: <Cog6ToothIcon className="h-5 w-5 me-1"></Cog6ToothIcon> }
  ];
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
