import React from "react";
import { BackgroundBeams } from "../components/ui/background-beam";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-brand-color-darker relative flex flex-col items-center justify-center antialiased">
      <Outlet />
      <BackgroundBeams />
    </div>
  );
};

export default Auth;
