import React from "react";
import Navbar from "./Navbar";
import PerItem from "./perItem";
import items from "./dummyData";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          borderRadius: "30px",
          border: "3px solid black",
          backgroundColor: "#fae2a2",
          justifyContent: "space-around",
          margin:"10px"
        }}
      >
        {items.map((item) => {
          return <PerItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
