import React from 'react';
import { Paragraph } from 'grommet';

function About() {
  return (
    <section className="AboutComponent">
      <article>
        <Paragraph size="large" className="homepageArticle">
          Local Buzz is a small business forum for small business owners and
          employees to share advice and stories to empower each other. Explore
          these tags that small business owners and employees are using to
          connect!
        </Paragraph>
      </article>
    </section>
  );
}

export default About;
