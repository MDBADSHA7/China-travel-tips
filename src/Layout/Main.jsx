import React from "react";
import { useEffect, useState } from 'react';
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Navbar/Navbar";

import { Outlet } from "react-router-dom";
import Footer2 from "../Shared/Footer/Footer2";

const Main = () =>{
       const [theme, setTheme] = useState(false);
       useEffect(() => {
       setTheme(JSON.parse(window.localStorage.getItem("theme")));
     }, []);
       const handleThemeChange = () => {
       setTheme(!theme);
       window.localStorage.setItem("theme", !theme);
     }; 

    return (
        <div>
            <div data-theme={theme && "my_dark"} className="">
               <Navbar handleThemeChange={handleThemeChange} theme={theme}></Navbar>
            </div>
            <div className="mt-16">
            </div>
            <Outlet></Outlet>
            <Footer2></Footer2>
            <Footer></Footer>
        </div>
    );
};
export default Main;