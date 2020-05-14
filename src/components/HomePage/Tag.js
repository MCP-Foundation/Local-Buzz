import React from 'react';

function Tag({ tagName, tagDescription }) {
  return (
    <section className="TagComponent">
      <button>#{tagName}</button>
      {tagDescription}
    </section>
  );
}

export default Tag;
