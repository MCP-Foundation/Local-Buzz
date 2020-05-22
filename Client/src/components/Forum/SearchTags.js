import React from 'react';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function SearchTags() {
  return (
    <section className="SearchTagsComponent">
      <input />
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} type="submit" />
      </Tooltip>
    </section>
  );
}

export default SearchTags;
