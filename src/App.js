import React, { useEffect, useState } from "react";
import "./App.css";
import Page from "./Page";
import Header from "./Header";
import Footer from "./Footer";
import Blog from "./Blog";
import axios from "./axios";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [home, setHome] = useState(true);
  const [Id, setId] = useState();
  useEffect(() => {
    if (0 === blogs.length) {
      async function fetchData() {
        const request = await axios.get("blogcat");
        setBlogs(request.data.blogs);
        return request;
      }
      fetchData();
    }
  }, []);

  return (
    <div className="App">
      <Header setHome={setHome} />

      {home && (
        <div className="App_blog">
          {blogs &&
            blogs.map((element) => {
              return (
                <Blog
                  auth={element.author}
                  img={element.image}
                  title={element.title}
                  des={element.meta}
                  key={element._id}
                  id={element._id}
                  setHome={setHome}
                  setId={setId}
                />
              );
            })}
        </div>
      )}
      {!home && <Page id={Id} />}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
