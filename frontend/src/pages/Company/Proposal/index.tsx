import { useEffect, useState } from "react";
import { Subbar, CustomTable } from "../components";
import mockData from "./mockData.json";

const headCells: readonly HeadCell<Proposal>[] = [
  { id: "position", numeric: false, disablePadding: true, label: "Position" },
  { id: "quantity", numeric: true, disablePadding: false, label: "Quantity" },
  { id: "length", numeric: true, disablePadding: false, label: "Length"},
  { id: "startDate", numeric: true, disablePadding: false, label: "Start date" },
  {
    id: "adsForm",
    numeric: true,
    disablePadding: false,
    label: "Advertisement form",
  }
];

export const CompanyProposal = () => {
  const [rows, setRows] = useState<Proposal[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRows(mockData);
    setLoading(false);
  }, []);

  return (
    <div className="px-10 flex flex-col">
      <Subbar label="Your advertising proposal"/>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <CustomTable rows={rows ?? []} headCells={headCells} />
      )}
    </div>
  );
};
