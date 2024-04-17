import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { JobCard } from "./components";
import "./index.css";
import { Pagination } from "flowbite-react";
import { useState } from "react";

export const CandidateHome = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);
  return (
    <div className="flex flex-col items-center w-full justify-center">
      <div className="bg-amber-100 w-full lg:px-40 sm:px-30 px-20 lg:py-16 sm:py-12 py-10">
        <h1 className="lg:text-4xl md:text-2xl text-lg text-center font-bold leading-10 line-clamp-2">
          Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc
        </h1>
        <p className="text-center text-sm font-medium leading-10 line-clamp-1">
          Tiếp cận <span className="font-bold">40,000+</span>tin tuyển dụng việc
          làm mỗi ngày từ hàng nghìn doanh nghiệp uy tín tại Việt Nam
        </p>
        <div className="flex h-14 items-center relative shadow-sm">
          <input
            type="text"
            className="w-full h-10 rounded-lg mx-auto focus:outline-none focus:border-none focus:ring-slate-400 border-slate-400"
            placeholder="Search"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-10">
            <MagnifyingGlassIcon className="h-5 w-5 absolute text-slate-400"></MagnifyingGlassIcon>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10 px-40 space-x-2 w-full mx-auto">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
      <div className="flex overflow-x-auto sm:justify-center ml-auto mr-40 mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
          theme={{
            pages: {
              selector: {
                base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-amber-100 enabled:hover:text-amber-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
                active:
                  "bg-amber-50 text-amber-600 hover:bg-amber-100 hover:text-amber-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
                disabled: "cursor-not-allowed opacity-50",
              },
            },
          }}
        />
      </div>
    </div>
  );
};
