import {
  Subbar,
  CustomTable,
  StatisticBar,
} from "./components";
export const CompanyHome = () => {
  return (
    <div className="px-10 flex flex-col">
      <StatisticBar />
      <Subbar />
      <CustomTable />
    </div>
  );
};
