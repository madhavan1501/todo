import { useEffect } from "react";
import Homediv from "./Homediv";

const Home = ({ data, setdata }) => {
  useEffect(() => {
    const localdata = JSON.parse(localStorage.getItem("datalist")) || [];
    setdata([...localdata]);
  }, [setdata]);
  return (
    <div className="home-div">
      <Homediv data={data} setdata={setdata} />
    </div>
  );
};

export default Home;

/*



       
               
                
        </div>
*/
