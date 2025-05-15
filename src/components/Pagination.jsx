import React from "react";

const Pagination = ({ total, page, itemsPerPage = 10, onPageChange }) => {
  const totalPages = Math.ceil(total / itemsPerPage);

  const getPageNumbers = () => {
    const pages = [];

    const maxVisible = 3;
    let start = Math.max(1, page - 1);
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    if (start > 1) pages.push("prevDots");

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages) pages.push("nextDots");

    return pages;
  };

  const handlePrevious = () => {
    if (page > 1) onPageChange(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) onPageChange(page + 1);
  };

  return (
    <nav aria-label="Pagination">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <button
            data-testId="button-test"
            onClick={handlePrevious}
            disabled={page === 1}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-sky-500 bg-white border border-e-0 border-sky-300 rounded-s-lg hover:bg-sky-100 disabled:opacity-50"
          >
            <svg className="w-2.5 h-2.5" viewBox="0 0 6 10" fill="none">
              <path
                d="M5 1L1 5L5 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>

        {getPageNumbers().map((p, index) => (
          <li key={index} className="h-8 border border-sky-50 bg-sky-300">
            {p === "prevDots" || p === "nextDots" ? (
              <span className="px-2 border border-sky-300">...</span>
            ) : (
              <button
                data-testId="button-test2"
                onClick={() => onPageChange(p)}
                className={`px-3 h-8 flex items-center justify-center leading-tight border ${
                  p === page
                    ? "text-sky-600 border-sky-300 bg-sky-50 dark:bg-sky-700 dark:text-white"
                    : "text-sky-500 bg-white border-sky-300 hover:bg-sky-100 hover:text-sky-700 dark:bg-sky-800 dark:border-sky-700 dark:text-sky-400 dark:hover:bg-sky-700 dark:hover:text-white"
                }`}
              >
                {p}
              </button>
            )}
          </li>
        ))}

        <li>
          <button
            data-testId="button-test3"
            onClick={handleNext}
            disabled={page === totalPages}
            className="flex items-center justify-center px-3 h-8 leading-tight text-sky-500 bg-white border border-sky-300 rounded-e-lg hover:bg-sky-100 disabled:opacity-50"
          >
            <svg className="w-2.5 h-2.5" viewBox="0 0 6 10" fill="none">
              <path
                d="M1 1L5 5L1 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
