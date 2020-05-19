import React from 'react';

function Tag({ tagName, tagDescription }) {
  return (
    <section className="TagComponent">
      <button type="button">
        #
        {tagName}
      </button>
      {tagDescription}
    </section>
  );
}

export default Tag;
