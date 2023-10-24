import { format } from "date-fns";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Newpost = ({ data, setdata }) => {
  const [namee, setname] = useState("");
  const [content, setcontent] = useState("");
  const navigate = useNavigate("");
  const time = format(new Date(), " MMM dd yyyy pp");

  const addContent = (e) => {
    e.preventDefault();
    const obj = {
      namee: namee,
      content: content,
      at: time,
    };
    setdata([...data, obj]);
    const localdata = JSON.parse(localStorage.getItem("datalist")) || [];
    localStorage.setItem("datalist", JSON.stringify([...localdata, obj]));
    setname("");
    setcontent("");
    navigate("/");
  };

  return (
    <form className="form" onSubmit={addContent}>
      <div className="input-div">
        <label htmlFor="input-name" id="input-label">
          Name:
        </label>
        <input
          type="text"
          placeholder="your sweet name"
          required
          id="input-name"
          value={namee}
          onChange={(e) => {
            setname(e.target.value);
          }}
        ></input>
      </div>
      <textarea
        required
        value={content}
        placeholder="what's in your mind"
        onChange={(e) => {
          setcontent(e.target.value);
        }}
      ></textarea>
      <input type="submit" className="submit"></input>
    </form>
  );
};

export default Newpost;
