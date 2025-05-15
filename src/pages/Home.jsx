import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import api from "../api";
import NavBar from "../components/NavBar";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import Filter from "../components/Filter";

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
    const [search, setSearch] = useState("");
    const [data, setData] = useState(() => posts);
    const [currentPost, setCurrentPost] = useState(null);

  const getPostsList = async () => {
    setLoading(true);
    const { page, itemsPerPage } = pagination;
    try {
      const result = await api.get(
        `/posts?_start=${page}&_limit=${itemsPerPage}`,
        { referrerPolicy: "unsafe-url" }
      );
      setPagination((prev) => ({
        ...prev,
        total: result.headers["x-total-count"],
      }));
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

  useEffect(() => {
    getPostsList();
  }, []);

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
    setPagination((prev) => ({ ...prev, page }));
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
          <Filter search={search} setSearch={setSearch}/>
          <Table posts={data} handleChange={handleChange} handleSave={handleSave} filteredPost={filteredPost} currentPost={currentPost} setCurrentPost={setCurrentPost}/> 
          <div className="flex justify-center m-7">
            {filteredPost.length ? (
              <Pagination
                total={pagination.total}
                page={pagination.page}
                itemsPerPage={pagination.itemsPerPage}
                onPageChange={(page) => handlePage(page)}
              />
            ): null}
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
