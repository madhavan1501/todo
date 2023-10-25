import React, { useEffect, useState } from "react";
import Header from "./header";
import "./App.css";
import Footer from "./footer";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Newpost from "./Newpost";
const App = () => {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState([]);

  useEffect(() => {
    setsearch([...data]);
  }, [data]);

  const handlesearch = (x) => {
    const filtereddata = data.filter((e) => {
      e.namee.toLowerCase().includes(x.target.value.toLowerCase()) ||
        e.content.toLowerCase().includes(x.target.value.toLowerCase());
    });

    setsearch([...filtereddata]);
  };

  /*

e.namee.toLowerCase().includes(x.target.value) ||
        e.content.toLowerCase().includes(x.target.value)*/

  return (
    <>
      <Header handleSearch={handlesearch} />
      <Routes>
        <Route path="/">
          <Route index element={<Home data={search} setdata={setdata} />} />
          <Route path="About" element={<About />} />
          <Route
            path="Newpost"
            element={<Newpost data={data} setdata={setdata} />}
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
