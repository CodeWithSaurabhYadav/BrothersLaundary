import React from "react";

import { useNavigate } from "react-router-dom";
import logoutUser from "../pages/auth/firebase/logout";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => logoutUser(navigate)}
          className="border border-3 p-3 bg-brand-color-default rounded-xl hover:bg-white ease-in w-[200px] text-center"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
