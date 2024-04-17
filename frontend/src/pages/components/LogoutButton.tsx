import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { useAppDispatch } from "libs/redux";
import { clearAuth } from "libs/redux/sliceAuth";

export const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    dispatch(clearAuth());
  }
  return (
    <button className="bg-transparent w-full hover:bg-amber-400 flex justify-start gap-2 items-center hover:border-amber-400 focus:outline-none focus:ring-amber-500 font-medium text-sm rounded-lg" onClick={logoutHandler}>
      <ArrowLeftOnRectangleIcon className="h-5 w-5 me-1"></ArrowLeftOnRectangleIcon>
      Log out
    </button>
  );
}