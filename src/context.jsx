import React,{ useContext, useReducer } from "react";
import reducer from "./reducer"
import { useEffect } from "react";
const AppContext = React.createContext();

const API = "https://fakestoreapi.com/products"
const initialState = {
    name : " ",
    services:[],
    image: " ",    
}

const AppProvider = ({ children }) => {
    const [state,dispatch] = useReducer(reducer, initialState);

    const updateHomePage = () =>{
        return dispatch({
            type:"HOME_UPDATE",
            payload:{ 
                name: "Balram Baghel",
                image: "./images/balram1.jpeg",  
            },
        })
    }
    
    const updateAboutPage = () =>{
        return dispatch({
            type:"ABOUT_UPDATE",
            payload:{
                name: "Balram Baghel",
                image: "./images/boy1.png",
            },
        })
    }
    
// to get the api data 
const getServices = async(url) =>{
    try{
        const res = await fetch(url);
        const data = await res.json();
        dispatch({type:"GET_SERVICES" , payload: data });
    }catch (error) {
        console.log(error);
    }
}

// to call the API
useEffect(() =>{
    getServices(API);
},[])

    return (

 <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>{children}</AppContext.Provider>
    ) 
    
}
// global custom hook
const useGlobalContext = () =>{
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext};