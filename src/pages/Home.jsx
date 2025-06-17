import { useEffect, useState, use } from "react";
import Table from "../components/Table";
import api from "../api";
import NavBar from "../components/NavBar";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import Filter from "../components/Filter";

const getUser = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = result.json();
  if(data) {
    return data
  } 
};

const promise = getUser()

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    total: 0,
    itemsPerPage: 5,
  });
    const [search, setSearch] = useState("");
    const [currentPost, setCurrentPost] = useState(null);  
    const users = use(promise);     
    const [data, setData] = useState(() => posts);

    const postsWithUser = data.map((item) => ({
      id: item.id,
      userId: item.userId,
      title: item.title,
      body: item.body,
      user: users.find((i) => i.id === item.userId)?.name,
    }));
  
    const filteredPost = postsWithUser.filter(
      (post) => post.title.includes(search) || post.body.includes(search)
    );
  

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


 
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCurrentPost((prev) => {
        return { ...prev, [name]: value };
      });
    };
  
    const handleSave = () => {
      const index = filteredPost.findIndex((p) => p.id === currentPost.id);
      const updatedPosts = filteredPost;
      updatedPosts[index] = currentPost;
      setData(updatedPosts);
      setCurrentPost(null);
    };
  
    useEffect(() => {
      if (search.length === 0) {
        setData(posts);
      }
    }, [posts, search, setData]);
  

  useEffect(() => {
    getPostsList();
  }, []);


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
          <Table handleChange={handleChange} handleSave={handleSave} filteredPost={filteredPost} currentPost={currentPost} setCurrentPost={setCurrentPost}/> 
          <div className="flex justify-center m-7">
            {filteredPost.length ? (
              <Pagination
                total={pagination?.total}
                page={pagination?.page}
                itemsPerPage={pagination?.itemsPerPage}
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
