import { useEffect, useState } from "react";
import { Subbar, CustomTable } from "../../components";
import mockData from "./mockData.json";
import StaffCandidateList from "./candidateList";

const headCells: readonly HeadCell<Contract>[] = [
    { id: "companyName", numeric: false, disablePadding: true, label: "Name" },
    { id: "phone", numeric: true, disablePadding: false, label: "Phone" },
    { id: "taxNumber", numeric: true, disablePadding: false, label: "Tax number" },
    { id: "position", numeric: true, disablePadding: false, label: "Position" },
    { id: "expiredDate", numeric: true, disablePadding: false, label: "Expired date" },
];
const StaffContract = () => {
    const [rows, setRows] = useState<Contract[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setRows(mockData);
        setLoading(false);
    }, []);

    return (
        <div className="px-10 flex flex-col">
            <Subbar label="Contracts" txtAdd="CREATE NEW CONTRACT" />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <CustomTable rows={rows ?? []} headCells={headCells} />
            )}
        </div>
    );
}

export { StaffCandidateList, StaffContract };
