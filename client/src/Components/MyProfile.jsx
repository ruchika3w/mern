
import React, { useState, useEffect } from "react";
import Axios from 'axios';
import './Profile.css'; // Import the CSS file
const MyProfile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await Axios.get("https://mern-2-tvyo.onrender.com/api/auth/user-profile");
        setUserData(response.data);
      } catch (err) {
        console.error(err);
        // Handle error, e.g., redirect to login page
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="container">
      <h2>My Profile</h2>

      <div className="profile-section">
        <p>Username: {userData.username}</p>
        <p>Email: {userData.email}</p>
        <p>Name: {userData.name}</p>
        <p>UserID: {userData.userId}</p>
      </div>
    </div>
  );
};

export default MyProfile;
