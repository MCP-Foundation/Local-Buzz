import React from 'react';
import { Button, Paragraph } from 'grommet';

function Tag({ tagName, tagDescription, tagIcon }) {
  return (
    <section className="tagComponent">
      <div>
        <img className="tagIcon" src={tagIcon} />
      </div>
      <div>
        {' '}
        <Button primary label={`#${tagName}`} />
      </div>

      <section className="TagDescription">
        <Paragraph size="large">{tagDescription}</Paragraph>
      </section>
    </section>
  );
}

export default Tag;
