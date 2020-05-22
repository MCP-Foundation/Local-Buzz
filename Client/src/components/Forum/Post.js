import React from 'react';

import { Timeline, Card, Avatar } from 'antd';
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from '@ant-design/icons';

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
        style={{ width: 400 }}
        avatar={
          <Avatar src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" />
        }
        title={title}
        actions={[
          <SmileTwoTone />,
          <HeartTwoTone twoToneColor="#eb2f96" />,
          <CheckCircleTwoTone twoToneColor="#52c41a" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          description={newDate}
        />
        <h6>{postBody}</h6>
      </Card>
    </Timeline.Item>
  );
}

export default Post;
