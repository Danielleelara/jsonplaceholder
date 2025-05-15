import React from "react";

const Filter = ({ search, setSearch }) => {
  return (
    <div className="py-4 m-5 mb-0 bg-white">
      <div className="relative mt-1 bg-white">
        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 dark:text-sky-50 focus:text-sky-950"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          onChange={(event) => setSearch(event.target.value)}
          value={search}
          type="text"
          id="table-search"
          className="block py-2 ps-10 text-sm text-sky-50 rounded-lg w-80 dark:bg-sky-600 focus:ring-sky-500 focus:border-sky-500 dark:border-gray-600 dark:placeholder-sky-50 dark:text-white dark:focus:ring-blue-500 dark:focus:border-gray-500"
          placeholder="Pesquise"
        />
      </div>
    </div>
  );
};

export default Filter;
