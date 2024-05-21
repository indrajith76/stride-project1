import React from "react";
import useAuth from "../hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleSignIn = () => {
    googleLogin();
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn btn-warning">
      Google Login
    </button>
  );
};

export default GoogleLogin;
