import React from "react";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth(); 
  return (
    <div className="container mx-auto mb-20">
      <h2 className="text-2xl my-10">Dashboard</h2>

      <div className=" flex flex-col items-center">
        <div>
          <div className="avatar online">
            <div className="w-24 rounded-full border">
              <img src={user.photoURL} />
            </div>
          </div>
        </div>
        <p className="mt-5 text-xl">
          User Name: <strong>{user.displayName}</strong>
        </p>
        <p className="my-5 text-xl">
          Email Address: <strong>{user.email}</strong>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
