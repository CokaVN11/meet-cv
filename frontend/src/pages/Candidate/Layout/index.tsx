import { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Avatar, Dropdown } from "flowbite-react";
import avatar from "assets/avatar.jpg";
import { useAppDispatch } from "libs/redux";
import { clearAuth } from "libs/redux/sliceAuth";

export const CandidateLayout: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div className="h-screen w-screen">
      {/* Header bar */}
      <div className="flex flex-row h-14 w-full items-center shadow-sm px-4 justify-between">
        <div className="flex flex-row items-center sm:space-x-4 w-1/2">
          <h1 className="sm:text-2xl text-md font-bold uppercase">Meet CV</h1>
          <button className="bg-transparent hover:text-amber-400 active:text-amber-500 text-black font-semibold py-2 lg:px-4 px-1 hover:border-transparent rounded">
            Jobs
          </button>
          <button className="bg-transparent hover:text-amber-400 active:text-amber-500 text-black font-semibold py-2 lg:px-4 px-1 hover:border-transparent rounded">
            Applied
          </button>
        </div>
        <Dropdown
          label={
            <Avatar img={avatar} rounded size="sm">
              <div className="space-y-1 font-medium dark:text-white">
                <p>John Doe</p>
              </div>
            </Avatar>
          }
          arrowIcon={true}
          inline
        >
          <Dropdown.Header>
            <span className="block truncate text-sm font-medium text-gray-500 dark:text-gray-400">
              john_doe@mail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Divider className="bg-gray-200 dark:bg-gray-700" />
          <Dropdown.Item
            onClick={() => {
              dispatch(clearAuth());
              navigate("/login");
            }}
          >
            Logout
          </Dropdown.Item>
        </Dropdown>
      </div>
      <Outlet />
    </div>
  );
};
