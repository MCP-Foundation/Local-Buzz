import React from 'react';
import { Row, Col } from 'antd';

function About() {
  return (
    <section className="AboutComponent">
      <Col span={22}>
        <article>
          <h4 className="homepageArticle">
            Small Stories is a small business forum for small business owners
            and employees to share advice and stories to empower eachother.
            Explore these tags that small business owners and employees are
            using to connect with eachother!
          </h4>
        </article>
      </Col>
    </section>
  );
}

export default About;
