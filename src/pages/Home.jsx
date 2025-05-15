import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import api from "../api";
import NavBar from "../components/NavBar";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    total: 0,
    itemsPerPage: 5,
  });

  const getPostsList = async () => {
    setLoading(true);
    const {page, itemsPerPage} = pagination
    try {
      const result = await api.get(
        `/posts?_start=${page}&_limit=${itemsPerPage}`,
        { referrerPolicy: "unsafe-url" }
      );
      setPagination((prev) => ({...prev, total: result.headers['x-total-count']}))
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
    getPostsList();
  }, [pagination.page]);

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
    setPagination((prev) => ({...prev, page}))
    getPostsList(page);
  };

  return (
    <div className="relative">
      <NavBar />
      {errorMessage && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-amber-800 dark:text-amber-300"
          role="alert"
        >
          <span className="font-medium">Atenção!</span> "Não foi possível
          carregar os dados. Tente novamente ou contate o nosso time!"
        </div>
      )}
      {loading ? (
        <div className="flex justify-center items-center pt-48">
          <Loading />
        </div>
      ) : (
        <>
          <Table posts={postsWithUser} />
          <div className="flex justify-center m-7 ">
            <Pagination
              total={pagination.total}
              page={pagination.page}
              itemsPerPage={pagination.itemsPerPage}
              onPageChange={(page) => handlePage(page)}
            />
          </div>
        </>
      )}
      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
