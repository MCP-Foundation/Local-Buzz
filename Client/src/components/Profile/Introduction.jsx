import React from 'react'

function Introduction() {

  // const [isLoading, setIsLoading] = useState(false);


  return (
    <div>
      <section className='introductionComponent'>
        <section className='introductionCard'>
          <section className='introduction'>
            <p className='introductionTitle'>Introduction</p>
          </section>
          <section className='introductionMenu'>
            <section className='introductionPhoto'>
              <img src='https://via.placeholder.com/120'></img>
            </section>
            <section className='introductionItems'>
              <p className='introductionItem'>
                <span class="material-icons">work</span>
                Backend Dev at Marcy Lab
              </p>
              <p className='introductionItem'>
                <span class="material-icons">location_on</span>
                Lives in Brooklyn
                </p>
              <p className='introductionItem'>
                <span class="material-icons">portrait</span>
                works within Tech
                </p>
            </section>
          </section>
          <section className='introductionBio'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</section>
        </section>
      </section>
    </div>
  )
}

export default Introduction
