"use client";

import google_img from "assets/Google_Logo_SM.png";
export const JobCard = () => {
  return (
    <a
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 px-4 py-2"
    >
      <img
        className="object-cover w-full rounded-t-lg h-16 md:h-20 md:w-20 md:rounded-none md:rounded-s-lg"
        src={google_img}
        alt="Google logo"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-sm font-bold text-left line-clamp-1 tracking-tight text-gray-900 dark:text-white">
          Nhân Viên Tư Vấn Mảng Thuê / Bán Nhà Phố (Lương Từ 8 Triệu + Hoa Hồng
          50% ) - Quận 4 - 10, Không Cần Kinh Nghiệm
        </h5>
        <p className="mb-3 text-xs font-normal text-left line-clamp-1 text-gray-700 dark:text-gray-400">
          Công Ty TNHH Bất Động Sản Đất Xanh Miền Nam
        </p>
        <div className="flex flex-row items-center w-full py-1 border-t border-gray-200 dark:border-gray-700 gap-4">
          <p className="text-xs font-normal bg-gray-200 text-gray-700 dark:text-gray-400 rounded px-2 py-1">
            Thoả Thuận
          </p>
          <p className="text-xs font-normal bg-gray-200 text-gray-700 dark:text-gray-400 rounded px-2 py-1">
            Hồ Chí Minh
          </p>
        </div>
      </div>
    </a>
  );
};
