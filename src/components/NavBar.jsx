import React from "react";

const NavBar = () => {
  return (
    <nav className="dark:bg-sky-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-sky-50">
            Posts
          </span>
        </div>

        <div
          className="justify-between"
          id="navbar-user"
        >
          <a
            href="https://github.com/Danielleelara"
            className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-sky-50 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
