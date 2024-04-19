import { StatisticBar } from "./components";

const headCells: readonly HeadCell<Ads>[] = [
  { id: "position", numeric: false, disablePadding: true, label: "Position" },
  { id: "quantity", numeric: true, disablePadding: false, label: "Quantity" },
  { id: "endTime", numeric: true, disablePadding: false, label: "End date" },
  {
    id: "adsForm",
    numeric: true,
    disablePadding: false,
    label: "Advertisement form",
  },
  {
    id: "description",
    numeric: false,
    disablePadding: false,
    label: "Description",
  },
];

export const CompanyHome = () => {
  return (
    <div className="px-10 flex flex-col">
      <StatisticBar />
    </div>
  );
};
