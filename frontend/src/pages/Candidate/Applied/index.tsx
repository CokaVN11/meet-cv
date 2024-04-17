import { Pagination } from "flowbite-react";
import { useState } from "react";
import { JobCard } from "../Home/components";

export const CandidateApplied = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  
  return (
    <div className="flex flex-row w-full">
      <div className="bg-amber-100 w-full lg:px-40 sm:px-30 px-20 lg:py-16 sm:py-12 py-10">
        <h1 className="lg:text-4xl md:text-2xl text-lg text-center font-bold leading-10 line-clamp-2">
          Việc làm đã ứng tuyển
        </h1>
        <div className="flex flex-col items-center w-full justify-center space-y-2">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <div className="flex overflow-x-auto sm:justify-center ml-auto mr-32 mt-4">
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
        
      </div>
    </div>
  )
}