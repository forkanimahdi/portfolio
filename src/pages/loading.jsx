import React from 'react';
import logo from "../assets/images/myLogo.png";

const LoadingPage = () => {
    return (
        <div className="h-screen bg-black flex flex-col gap-y-5 items-center justify-center transition-all">
            <img className="w-72 animate-pulse" src={logo} alt="" />
            <h1 className="text-white boldPoppin animate-pulse text-4xl uppercase">Loading ... </h1>
        </div>
    );
};

export default LoadingPage;