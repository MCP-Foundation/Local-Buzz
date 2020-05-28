import React, { useState } from 'react';

const TagContext = React.createContext([{}, () => { }]);

const TagProvider = props => {
  const [tag, setTag] = useState('');
  return (
    <TagContext.Provider value={[tag, setTag]}>
      {props.children}
    </TagContext.Provider>
  );
}

export { TagContext, TagProvider };