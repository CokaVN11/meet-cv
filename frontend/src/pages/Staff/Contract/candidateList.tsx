import { useEffect, useState } from "react";
import { CustomTable } from "../../components";
import mockData from "./candidateMockData.json";

const headCells: readonly HeadCell<Candidate>[] = [
    { id: "name", numeric: false, disablePadding: true, label: "Name" },
    { id: "email", numeric: true, disablePadding: false, label: "Email" },
    { id: "phone", numeric: true, disablePadding: false, label: "Phone" },
    { id: "resumeID", numeric: true, disablePadding: false, label: "Resume ID" },
];

const StaffCandidateList = () => {
    const [rows, setRows] = useState<Candidate[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setRows(mockData);
        setLoading(false);
    }, []);

    return (
        <div className="px-10 flex flex-col">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <CustomTable rows={rows ?? []} headCells={headCells} />
            )}
        </div>
    );
}

export default StaffCandidateList;