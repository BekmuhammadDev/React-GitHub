import {createBrowserRouter} from "react-router-dom";
import {Profile} from "../layouts";
import {Home ,Error,Followers,Followings,Packages,Projects,Stars,Repostories} from "../pages"
import { AuthLayout } from "../layouts";


const router=[
    {
        path: '/',
        element:<Profile/>,
        children:[
            {path: "/",element:<Home/>},
            {path: "*", element:<Error/>},
            {path: "/followers",element:<Followers/>},
            {path: "/followings",element:<Followings/>},
            {path: "/repostories",element:<Repostories/>},
            {path: "/stars",element:<Stars/>},
            {path: "/packages",element:<Packages/>},
            {path: "/projects",element:<Projects/>},



        ]
    },
    {
        path: "*",
        element:<Error/>
    },

    {
        path:"/login",
        element:<AuthLayout/>,
       
    }
];

export const AppRouter = createBrowserRouter(router);