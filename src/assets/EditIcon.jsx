import React from "react";

const EditIcon = ({ className = "", ...props }) => (
  <span
    className={`inline-flex items-center justify-center text-gray-600 hover:text-sky-600 transition-colors cursor-pointer ${className}`}
    {...props}
    title="Editar"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
    </svg>
  </span>
);

export default EditIcon;
