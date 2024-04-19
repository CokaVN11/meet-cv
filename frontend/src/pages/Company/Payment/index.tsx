import { useEffect, useState } from "react";
import { CustomTable, Subbar } from "../../components";
import mockData from "./mockData.json";

const headCells: readonly HeadCell<Payment>[] = [
  // { id: "position", numeric: false, disablePadding: true, label: "Position" },
  { id: "posName", numeric: false, disablePadding: true, label: "Position" },
  { id: "adsForm", numeric: false, disablePadding: true, label: "Advertisement form" },
  { id: "contractLength", numeric: true, disablePadding: false, label: "Contract length" },
  { id: "paid", numeric: true, disablePadding: false, label: "Paid" },
  { id: "total", numeric: true, disablePadding: false, label: "Total" },
  { id: "method", numeric: false, disablePadding: false, label: "Method" },
];

export const CompanyPayment = () => {
  const [rows, setRows] = useState<Payment[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRows(mockData);
    setLoading(false);
  }, []);

  return (
    <div className="px-10 flex flex-col">
      {/* <Subbar label="Your hiring positions" txtAdd="ADD NEW POSITION" /> */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <CustomTable rows={rows ?? []} headCells={headCells} />
      )}
    </div>
  );
};

