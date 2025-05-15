import React from "react";
import EditIcon from "../assets/EditIcon";
import SaveIcon from "../assets/SaveIcon";

const Table = ({handleChange, handleSave, filteredPost, currentPost, setCurrentPost }) => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md rounded-lg bg-amber-700 m-5 mt-0">
        <form
          id="inline-form"
          onSubmit={(event) => {
            event.preventDefault();
            handleSave();
          }}
        ></form>
        <table
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          id="search-table"
        >
          <thead className="text-xs  rounded-lg  text-gray-700 uppercase dark:bg-sky-600 dark:text-sky-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Título
              </th>
              <th scope="col" className="px-6 py-3">
                Texto
              </th>
              <th scope="col" className="px-6 py-3">
                Usuário
              </th>
              <th scope="col" className="px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredPost.map((item) =>
              currentPost?.id === item.id ? (
                <React.Fragment key={item.id}>
                  <tr
                    key={item.id}
                    className="bg-white dark:bg-blue-100 border-gray-200 dark:text-blue-600 dark:focus:bg-sky-50 "
                  >
                    <th
                      scope="row"
                      className="px-6 py-4  bg-sky-50 font-medium text-gray-900 whitespace-nowrap dark:text-blue-600"
                    >
                      {item.id}
                    </th>
                    <td className="px-6 py-4 bg-sky-50">
                      <input
                        required
                        maxLength={50}
                        className="px-6 py-4 w-full border rounded-lg"
                        name="title"
                        form="inline-form"
                        value={currentPost.title}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </td>
                    <td className="px-6 py-4  bg-sky-50">
                      <input
                        maxLength={200}
                        className="px-6 py-4 w-full border rounded-lg"
                        required
                        name="body"
                        form="inline-form"
                        value={currentPost.body}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </td>
                    <td className="px-6 py-4  bg-sky-50">{item.user}</td>
                    <td className="px-6 py-4  bg-sky-50">
                      <button form="inline-form">
                        <SaveIcon />
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ) : (
                <tr
                  key={item.id}
                  className="border-b border-gray-200  odd:dark:bg-sky-50  even:dark:bg-sky-200 dark:text-sky-950  focus:bg-sky-50"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap"
                  >
                    {item.id}
                  </th>
                  <td className="px-6 py-4 ">{item.title}</td>
                  <td className="px-6 py-4">{item.body}</td>
                  <td className="px-6 py-4">{item.user}</td>
                  <td className="px-6 py-4">
                    <EditIcon onClick={() => setCurrentPost(item)} />
                  </td>
                </tr>
              )
            )}
            {filteredPost.length === 0 && (
              <tr className="bg-sky-50 text-sky-900">
                <td colSpan={5} className="px-6 py-4 text-center ">
                  Não foi encontrado nenhum resultado para essa pesquisa
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
