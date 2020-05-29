import React, { useContext } from 'react';
import { Button, Paragraph } from 'grommet';
import { TagContext } from '../../contexts/tagContext';
import { Link } from 'react-router-dom';

function Tag({ tagName, tagDescription, tagIcon }) {
  const [tag, setTag] = useContext(TagContext);

  return (
    <section className="tagComponent">
      <div>
        <img className="tagIcon" src={tagIcon}></img>
      </div>
      <div className="tagButton">
      
      {document.cookie ?         
        <Link to="/forum" replace>
          <Button
            primary
            label={`#${tagName}`}
          />
        </Link>:
        <Link to="/login" replace>
          <Button
            primary
            label={`#${tagName}`}
          />
        </Link>}

      </div>

      <section className="TagDescription">
        <Paragraph size="large">{tagDescription}</Paragraph>
      </section>
    </section>
  );
}

export default Tag;
