import React from "react";
import { useDispatch } from "react-redux";
import { startGoogleLogout } from "../../actions/authActions";

const HomePage = () => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogout());
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
