import React from 'react';
import { Button } from 'grommet';
import { Row, Col } from 'antd';

function Tag({ tagName, tagDescription }) {
  return (
    <section className="TagComponent">
      <Row justify="start">
        <Col>
          <Button primary label={'#' + tagName} />
        </Col>
      </Row>
      <Row justify="start">
        <Col>
          <h4>{tagDescription}</h4>
        </Col>
      </Row>
    </section>
  );
}

export default Tag;
