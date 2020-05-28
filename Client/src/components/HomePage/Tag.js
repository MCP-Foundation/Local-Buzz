import React from 'react';
import { Button, Paragraph } from 'grommet';


function Tag({ tagName, tagDescription }) {
  return (
    <section>
      <Button primary label={`#${tagName}`} />

      <section className="TagComponent">
        <Paragraph size="large">{tagDescription}</Paragraph>
      </section>
    </section>
  );
}

export default Tag;
