import React, { useState, useEffect } from 'react';
import { Location } from 'grommet-icons';

function Introduction() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    function getLoggedInUserData() {
      setIsLoading(true);
      fetch('/api/userObj')
        .then((res) => res.json())
        .then((data) => {
          setLoggedInUser(data);
        })
        .catch(() => {
          const err = 'Sorry there was an error, please try again';
          setError(err);
        });
    }
    getLoggedInUserData();
    setIsLoading(false);
  }, []);
  console.log(loggedInUser);

  return (
    <section className="accountUserInfo">
      <section className="accountUserAvatar">
        <img alt="user avatar" src={loggedInUser.avatar}></img>
      </section>
      <h1 className="accountName">{loggedInUser.name}</h1>
      <h2 className="accountUsername">@{loggedInUser.username}</h2>

      <section className="accountUserLocation">
        <p className="location">
          <Location size="large" />
          {loggedInUser.address}
        </p>
      </section>
    </section>
  );
}

export default Introduction;
