import { useEffect, useState } from "react";
import { Subbar, CustomTable } from "../components";
import mockData from "./mockData.json";

const headCells: readonly HeadCell<Company>[] = [
  { id: "name", numeric: false, disablePadding: true, label: "Name" },
  { id: "email", numeric: true, disablePadding: false, label: "Email" },
  { id: "taxNumber", numeric: true, disablePadding: false, label: "Tax number" },
  { id: "address", numeric: true, disablePadding: false, label: "Address", },
];

export const StaffCompany = () => {
  const [rows, setRows] = useState<Company[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRows(mockData);
    setLoading(false);
  }, []);

  return (
    <div className="px-10 flex flex-col">
      <Subbar label="Companies" />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <CustomTable rows={rows ?? []} headCells={headCells} />
      )}
    </div>
  );
}