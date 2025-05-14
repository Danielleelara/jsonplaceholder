import React from "react";

const SaveIcon = ({ className = "w-5 h-5 text-blue-600", onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 3a1 1 0 0 1 .707.293l.007.007a1 1 0 0 1 .286.707V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4c0-.552.448-1 1-1h13zm-2 6H5v7h10V9zM6 10h2v2H6v-2zM14 4H5v3h9V4z" />
    </svg>
  );
};

export default SaveIcon;
