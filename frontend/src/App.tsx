import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  redirect,
} from "react-router-dom";
import { CandidateHome, StaffCompany, StaffContract, StaffLayout, StaffReport, Login, CompanyHome, CompanyLayout, CompanyPosition, CompanyProposal, CompanyEmployee, CompanyAddProposal } from "./pages";
import "./App.css";
import { useAppSelector } from "./libs/redux";
import { useMemo } from "react";
import { CandidateApplied } from "pages/Candidate/Applied";

const PrivateRoute = ({
  role,
  redirectPath = "/login",
}: {
  role: string | null;
  redirectPath?: string;
}) => {
  const layout = useMemo(() => {
    if (role === "company") return <CompanyLayout />;
    if (role === "staff") return <StaffLayout />;
    return <Outlet />;
  }, [role]);

  return role ? layout : <Navigate to={redirectPath} />;
};

const App = () => {
  const role = useAppSelector((state) => state.auth.role);
  const loginLoader = () => {
    return role ? redirect('/' + role) : null;
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<Navigate to="/login" />} index />
        <Route path="/login" loader={loginLoader} element={<Login />} />
        <Route path="/candidate" element={<PrivateRoute role={role} />}>
          <Route path="" element={<CandidateHome />} index />
          <Route path="/candidate/applied" element={<CandidateApplied />} />
        </Route>
        <Route path="/staff" element={<PrivateRoute role={role} />}>
          <Route path="" element={<StaffCompany />} index />
          <Route path="/staff/contract" element={<StaffContract />} />
          <Route path="/staff/report" element={<StaffReport />} />
        </Route>
        <Route path="/company" element={<PrivateRoute role={role} />}>
          <Route path="" element={<CompanyHome />} index />
          <Route path="/company/position" element={<CompanyPosition />} />
          <Route path="/company/proposal" element={<CompanyProposal />} />
          <Route path="/company/proposal/add" element={<CompanyAddProposal />} />
          <Route path="/company/employee" element={<CompanyEmployee />} />

          <Route path="*" element={<Navigate to="/company" />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
