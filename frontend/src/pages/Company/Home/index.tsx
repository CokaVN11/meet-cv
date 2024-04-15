import { Sidebar, Headerbar, Subbar, CustomTable } from "./components";
import { StatisticCard } from "./components/StatisticCard";
export const CompanyHome = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-row h-screen w-screen">
        <Sidebar />
        <div className="basic w-4/5">
          <Headerbar />
          <div className="px-10 flex flex-col">
            <div className="flex flex-row gap-10 h-40 mt-8">
              <StatisticCard
                title="Employed"
                value={10}
                className="bg-cyan-100"
              />
              <StatisticCard
                title="Hiring position"
                value={100}
                className="bg-rose-100"
              />
              <StatisticCard
                title="Unpaid bill"
                value={'$1000'}
                className="bg-yellow-100"
              />
              <StatisticCard
                title="Users"
                value={3}
                className="yellow-gradient"
              />
            </div>
            <Subbar />
            <CustomTable />
          </div>
        </div>
      </div>
    </div>
  );
};
