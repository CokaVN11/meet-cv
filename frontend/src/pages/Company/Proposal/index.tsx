import { useEffect, useState } from "react";
import { Subbar, CustomTable } from "../components";
import mockData from "./mockData.json";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  useEffect(() => {
    setRows(mockData);
    setLoading(false);
  }, []);

  return (
    <div className="px-10 flex flex-col">
      <Subbar label="Your advertising proposal" onClickHandler={() => navigate("/company/proposal/add")} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <CustomTable rows={rows ?? []} headCells={headCells} />
      )}
    </div>
  );
};
