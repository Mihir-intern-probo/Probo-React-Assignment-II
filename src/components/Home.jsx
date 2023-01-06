import React from 'react'
import Navbar from './Navbar';
import PerItem from './perItem';
import items from './dummyData';
const Home = () => {
    
  return (
    <div>
      <Navbar />
        <div style={{ display: "flex" }}>
          {items.map((item) => {
            return <PerItem item={item} key={item.id} />;
          })}
        </div>
    </div>
  )
}

export default Home
