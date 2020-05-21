import React from 'react';
import { Button, Main, Heading, Paragraph } from 'grommet';
import { Row, Col } from 'antd';
import '../HomePage/HomePage.css';

function Banner({ forumPageRedirect }) {
  return (
    <section className="BannerComponent">
      <header>
        <Main pad="large">
          <Heading>Small Stories</Heading>
          <Paragraph>
            Connect with businesses on how they they have handled the current
            climate!
          </Paragraph>
        </Main>
        <Row>
          <Col span={8}></Col>
          <Col span={8}>
            <Button label="Forum" onClick={forumPageRedirect} />
          </Col>
          <Col span={8}></Col>
        </Row>
      </header>
    </section>
  );
}

export default Banner;
