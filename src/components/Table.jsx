import React, { useEffect, useState } from "react";
import EditIcon from "../assets/EditIcon";
import SaveIcon from "../assets/SaveIcon";

const Table = ({ posts, users }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(() => posts);
  const [currentPost, setCurrentPost] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentPost((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSave = () => {
    const index = data.findIndex((p) => p.id === currentPost.id);
    const updatedPosts = data;
    updatedPosts[index] = currentPost;
    setData(updatedPosts);
    setCurrentPost(null);
  };

  useEffect(() => {
    if (search.length === 0) {
      setData(posts);
    }
  }, [posts, search, setData]);

  const filteredPost = data.filter(
    (post) => post.title.includes(search) || post.body.includes(search)
  );


  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5" users={users} >
      <div className="py-4 bg-white">
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
              Editar
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredPost.map((item) =>
            currentPost?.id === item.id ? (
              <React.Fragment key={item.id}>
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-blue-100 dark:border-b-blue-800 border-gray-200 dark:text-blue-600 dark:focus:bg-sky-50 "
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-blue-600"
                  >
                    {item.id}
                  </th>
                  <td className="px-6 py-4">
                    <input
                      className="px-6 py-4 w-full border rounded-xs "
                      name="title"
                      value={currentPost.title}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      className="px-6 py-4 w-full border rounded-xs"
                      name="body"
                      value={currentPost.body}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </td>
                  <td className="px-6 py-4">{item.user}</td>
                  <td className="px-6 py-4">
                    <SaveIcon onClick={() => handleSave()}/>
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
            <tr className="bg-white border-b dark:bg-blue-100 dark:border-b-blue-800 border-gray-200 dark:text-blue-600 ">
              <td colSpan={5} className="px-6 py-4 text-center ">
                Não foi encontrado nenhum resultado para essa pesquisa
              </td>
            </tr>
          )}
        </tbody>
  
      </table>
    </div>
  );
};

export default Table;
