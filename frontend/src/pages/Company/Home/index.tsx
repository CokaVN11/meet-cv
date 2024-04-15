import { Sidebar, Headerbar, Subbar, CustomTable } from "./components";
export const CompanyHome = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-row h-screen w-screen">
        <Sidebar />
        <div className="basic w-4/5">
          <Headerbar />
          <div className="px-10">
            <Subbar />
            <CustomTable />
          </div>
        </div>
      </div>
    </div>
  );
};
