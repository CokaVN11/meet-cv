import { useEffect, useState } from "react";
import { StatisticBar } from "./components";
import { Subbar, CustomTable } from "../components";
import mockData from "./mockData.json";

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
  const [rows, setRows] = useState<Ads[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRows(mockData);
    setLoading(false);
  }, []);

  return (
    <div className="px-10 flex flex-col">
      <StatisticBar />
      <Subbar label="Your hiring positions"/>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <CustomTable rows={rows ?? []} headCells={headCells} />
      )}
    </div>
  );
};
