import {createContext, useContext, useState,useEffect} from "react"
const ItemContext = createContext();


const ItemProvider = ({children})=>{
    const [items,setItems]=useState([]);
    const [totalCost,setTotalCost]=useState(0);
    return(
        <ItemContext.Provider value={
            {items,setItems,totalCost,setTotalCost}
}>
            {children}
        </ItemContext.Provider>
    )
}; 

export const ItemState=()=>{
    return useContext(ItemContext);
}

export default ItemProvider;
