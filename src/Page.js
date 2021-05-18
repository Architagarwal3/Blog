import React, { useState, useEffect } from "react";
import axios from "./axios";

function Page({ id }) {
  const [obj, setObj] = useState();
  const [html, setHtml] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`blogs/${id}`);
      console.log(request.data.blog[0]);
      setObj(request.data.blog[0]);
      setHtml(request.data.blog[0].description);
      return request;
    }
    fetchData();
  }, []);
  return (
    <div className="page">
      <h1 className="page_title">{obj.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />;
    </div>
  );
}

export default Page;
