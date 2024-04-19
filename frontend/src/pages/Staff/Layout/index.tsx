import { Outlet } from "react-router-dom"
import { Sidebar } from "../components/Sidebar"
import { Headerbar } from "../../components"
import { FC } from "react"

export const StaffLayout: FC = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-row h-screen w-screen">
        <Sidebar />
        <div className="basic w-4/5">
          <Headerbar />
          <Outlet />
        </div>
      </div>
    </div>
  )
}