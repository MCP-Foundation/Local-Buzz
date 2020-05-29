import React, { createContext, useState } from 'react';

const TagContext = createContext();
function TagProvider(props) {
  const [tag, setTag] = useState([]);
  return (
    <TagContext.Provider value={[tag, setTag]}>
      {props.children}
    </TagContext.Provider>
  );
}
export { TagContext, TagProvider };
