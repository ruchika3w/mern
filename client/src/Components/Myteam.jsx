import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './team.css';

const Myteam = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    Axios.get('https://mern-2-tvyo.onrender.com/api/auth/myteam')
      .then(response => {
        setUserData(response.data);
      })
      .catch(err => {
        console.error(err);
        // Handle error, e.g., redirect to login page
      });
  }, []);

  return (
    <div>
      <h2>My Team</h2>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Level</th>
            <th>Name</th>
            <th>Sponsor ID</th>
            <th>Sponsor Name</th>
            <th>Position</th>

          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.level}</td>
              <td>{user.name}</td>
              <td>{user.sponsorId}</td>
              <td>{user.sponsorName}</td>
              <td>{user.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Myteam;
