import React from 'react';

function Tag({ tagName, tagDescription }) {
  return (
    <section className="TagComponent">
      
      <button class="tip" type="button">
        #{tagName}
        <span>{tagDescription}</span>
        
        
      </button>
      
    </section>
  );
}

export default Tag;
