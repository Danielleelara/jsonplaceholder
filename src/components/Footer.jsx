import React from "react";

const Footer = () => {
  return (
    <footer className="shadow-sm dark:bg-sky-800 text-center inset-x-0 bottom-0 m-auto fixed">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex justify-center flex-col">
        <span className="text-sm text-sky-50">© 2025 - Danielle Souza</span>
        <span className="text-sm text-sky-50">
          Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
