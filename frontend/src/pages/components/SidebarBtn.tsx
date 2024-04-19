import { clearAuth } from "libs/redux/sliceAuth";
import { setCurrentPage } from "libs/redux/sliceCompany";
import { useNavigate } from "react-router-dom";
import { CompanyPageTitle } from "types/index";
import { useAppDispatch } from "libs/redux";

export const SidebarButton = ({
    icon,
    text,
    active = false,
    nextPath
}: {
    icon: React.ReactNode;
    text: string;
    active?: boolean;
    nextPath?: string;
}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onClickHandler = () => {
        if (text === "Log out") {
            dispatch(clearAuth());
        }
        else {
            dispatch(setCurrentPage(text as CompanyPageTitle));
            if (nextPath) {
                navigate(nextPath);
            }
        }
    }
    return (
        <button className={`${active ? 'bg-amber-500 text-white hover:bg-amber-500' : 'bg-transparent'} w-full hover:bg-amber-400 flex justify-start gap-2 items-center hover:border-amber-400 focus:outline-none focus:ring-amber-500 font-medium text-sm`} onClick={onClickHandler}>
            {icon}
            {text}
        </button>
    );
};