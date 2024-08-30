import { Outlet } from "react-router";
import { userAPI } from "../../service/user";
import { Aside,Header,Footer, Navigation, } from "../../components/layouts"
import {Section} from "../../components/containers"
import "./style.scss";
import { useEffect,useState,memo } from "react";
import { UserContext } from "../../context/user.context";

export const Profile =memo ( () => {

    const [data,setData]=useState("app");


    const useFetcher=async()=>{
        const res=await  userAPI.searchUser(import.meta.env.VITE_MY_PROFILE)
       setData(res)
        
    }


    useEffect(()=>{
        useFetcher()
    },[])
    return (
        <>
            <UserContext.Provider value={data}>

         
            <Header />
            <Navigation/>
            <Section className="main-section">
                <Aside />
                <div className="outlet">
                   <Outlet/>
                </div>
            </Section>
            <Footer/>

            </UserContext.Provider>


        </>
    );
});

