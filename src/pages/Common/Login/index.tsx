import { redirect } from "react-router-dom";
import { useAppDispatch } from "../../../libs/redux";
import { setAuth } from "../../../libs/redux/sliceAuth";

export const Login = () => {
  const dispatch = useAppDispatch();
  const handleLogin = (role: string) => {
    dispatch(setAuth({ token: "token", role }));
    // Redirect to home page
    redirect("/");
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => handleLogin("candidate")}>Candidate</button>
      <button onClick={() => handleLogin("staff")}>Staff</button>
      <button onClick={() => handleLogin("company")}>Company</button>
    </div>
  );
}