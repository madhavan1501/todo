import React, { useState } from "react";

const Homediv = ({ data, setdata }) => {
  const handledelete = (e) => {
    const filtereddata = data.filter((x, index) => e !== index);
    setdata([...filtereddata]);
    localStorage.setItem("datalist", JSON.stringify([...filtereddata]));
  };
  const [editsetion, seteditsection] = useState(false);
  const handleedit = (ix, namee, content) => {
    setname(namee);
    setcontent(content);
    seteditsection(true);
    setindex(ix);
    const databox = document.querySelector(".data-box");
    databox.style.filter = "blur(10px)";
  };
  const editContent = (e) => {
    e.preventDefault();
    data.map((e, ix) => {
      if (ix === index) {
        return (e.namee = namee)((e.content = content));
      }
    });
    localStorage.setItem("datalist", JSON.stringify([...data]));
    const databox = document.querySelector(".data-box");
    seteditsection(false);
    databox.style.filter = "none";
  };
  const [namee, setname] = useState("");
  const [content, setcontent] = useState("");
  const [index, setindex] = useState();

  return (
    <>
      {data &&
        data.map((e, ix) => (
          <div key={ix} className="data-box">
            <div className="name-box">
              <h3 className="name">{e.namee}</h3>
              <h5 className="at">{e.at}</h5>
            </div>

            <div className="content-box">
              <h1 className="content">{e.content}</h1>
              <div className="home-btn-div">
                <button
                  className="btnedit"
                  onClick={() => {
                    handleedit(ix, e.namee, e.content);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => handledelete(ix)} className="btndelete">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      {!data.length && (
        <div className="empty-div">
          <h1 className="empty-content">hurry and add some!</h1>
        </div>
      )}
      {editsetion && (
        <div>
          <form className="form edit-section" onSubmit={editContent}>
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
        </div>
      )}
    </>
  );
};

export default Homediv;
