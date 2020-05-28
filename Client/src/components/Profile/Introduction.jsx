import React, { useState, useEffect } from 'react'

function Introduction() {

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    function getUserData() {
      setIsLoading(true);
      fetch(`/api/user-data`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data[0]);
        })
        .catch(() => {
          const err = 'Sorry there was an error, please try again';
          setError(err);
        });
    }

    getUserData();
    setIsLoading(false);
  }, []);
  console.log(user);

  return (
    <div>
      <section className='introduction'>
        <p className='introductionTitle'>Introduction</p>
      </section>
      <section className='introductionComponent'>

       
        <section className='introductionCard'>
          
          <section className='introductionMenu'>
            <section className='introductionPhoto'>
              <img src={user.avatar || 'https://via.placeholder.com/120'}></img>
              <section className='introductionName'>
                <h2>{user.name}</h2>
              </section>
            </section>
            <section className='introductionItems'>
              <p className='introductionItem'>
                <span class="material-icons">work</span>
                Backend Dev at Marcy Lab
              </p>
              <p className='introductionItem'>
                <span class="material-icons">portrait</span>
                Works within {user.category}
              </p>
              <p className='introductionItem'>
                <span class="material-icons">location_on</span>
                Lives in {user.address}
                </p>
            </section>
          </section>
          <section className='introductionBio'>
            {user.bio}
          </section>
        </section>
      </section>
    </div>
  )
}

export default Introduction
