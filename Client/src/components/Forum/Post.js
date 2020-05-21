import React from 'react';

import { Timeline, Card, Avatar, Row, Col } from 'antd';

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Meta } = Card;

function Post({ title, category, tag, postBody, date }) {
  const d = new Date(date.replace(' ', 'T'));
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  const newDate = `${mo} ${da}, ${ye}`;

  return (
    <Timeline.Item>
      <Card
        style={{ width: 500 }}
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={title}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          description={postBody}
        />
      </Card>
    </Timeline.Item>
  );
}

export default Post;
