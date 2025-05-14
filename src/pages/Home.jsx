import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import api from "../api";
import NavBar from "../components/NavBar";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 5;

  const getPostsList = async (page) => {
    setLoading(true);
    try {
      const result = await api.get(
        `/posts?_start=${page}&_limit=${itensPorPagina}`,
        { referrerPolicy: "unsafe-url" }
      );
      setPosts(result.data);
    } catch {
      setErrorMessage(true);
    } finally {
      setLoading(false);
    }
  };

  const getUser = async () => {
    setLoading(true);
    try {
      const result = await api.get("/users", { referrerPolicy: "unsafe-url" });
      setUsers(result.data);
    } catch {
      setErrorMessage(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostsList(paginaAtual);
  }, [paginaAtual]);

  useEffect(() => {
    getUser();
  }, []);

  const postsWithUser = posts.map((item) => ({
    id: item.id,
    title: item.title,
    body: item.body,
    user: users.find((i) => i.id === item.userId)?.name,
  }));

  const handlePage = (page) => {
    setPaginaAtual(page);
    getPostsList(page);
  };

  return (
    <>
      <NavBar />
      {errorMessage && (
        <div
          class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-amber-800 dark:text-amber-300"
          role="alert"
        >
          <span class="font-medium">Atenção!</span> "Não foi possível carregar
          os dados. Tente novamente ou contate o nosso time!"
        </div>
      )}
      {loading ? (
        <div className="flex justify-center items-center pt-48">
          <Loading/>
        </div>
      ) : (
        <>
          <Table posts={postsWithUser} />
          <div className="flex justify-center m-7 ">
            <Pagination
              total={200 / 5}
              page={paginaAtual}
              itemsPerPage={itensPorPagina}
              onPageChange={(page) => handlePage(page)}
            />
          </div>
        </>
      )}
      {/* <footer class="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://github.com/Danielleelara" class="hover:underline">
              DanielleSouza
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://www.linkedin.com/in/danielle-souza-bb95b05b/"
                class="hover:underline"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </footer> */}
    </>
  );
};

export default Home;
