import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  redirect,
} from "react-router-dom";
import { CandidateHome, StaffHome, Login, CompanyHome, CompanyLayout } from "./pages";
import "./App.css";
import { useAppSelector } from "./libs/redux";
import { useMemo } from "react";

const PrivateRoute = ({
  role,
  redirectPath = "/login",
}: {
  role: string | null;
  redirectPath?: string;
}) => {
  const layout = useMemo(() => {
    if (role === "company") return <CompanyLayout />;
    return <Outlet />;
  }, [role]);

  return role ? layout : <Navigate to={redirectPath} />;
};

const App = () => {
  const role = useAppSelector((state) => state.auth.role);
  const loginLoader = () => {
    if (role === 'staff') return redirect('/staff');
    if (role === 'company') return redirect('/company');
    if (role === 'candidate') return redirect('/candidate');
    return role ? redirect('/' + role) : null;
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<Navigate to="/login" />} index />
        <Route path="/login" loader={loginLoader} element={<Login />} />
        <Route path="/candidate" element={<PrivateRoute role={role} />}>
          <Route path="" element={<CandidateHome />} index />
        </Route>
        <Route path="/staff" element={<PrivateRoute role={role} />}>
          <Route path="" element={<StaffHome />} index />
        </Route>
        <Route path="/company" element={<PrivateRoute role={role} />}>
          <Route path="" element={<CompanyHome />} index />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
