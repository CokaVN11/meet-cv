import { useAppDispatch } from "libs/redux";
import { clearAuth } from "libs/redux/sliceAuth";

export const CandidateHome = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Candidate Home</h1>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => dispatch(clearAuth())}>
        Logout
      </button>
    </div>
  );
}