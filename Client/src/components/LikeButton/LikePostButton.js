import React, { useEffect, useState } from 'react';
import { Favorite } from 'grommet-icons';

function LikePostButton({ user, postId }) {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const getLikes = async () => {
      const req = await fetch(`/api/likes/${postId}`);
      const res = await req.json();
      setLikes(res);
    };
    getLikes();
  }, [likes]);

  const isLikedByUser = likes.some((like) => like.user_id === user.user_id);

  const handleClick = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    if (isLikedByUser) {
      const res = await fetch(`/api/unlike/${postId}/${user.user_id}`, options);
      const likes = await res.json();
      console.log('likes form api', likes);
      setLikes(likes);
    } else {
      const res = await fetch(`/api/like/${postId}/${user.user_id}`, options);
      const likes = await res.json();
      setLikes(likes);
      console.log('likes form api', likes);
    }
  };

  return (
    <span className="likes" onClick={() => handleClick()}>
      {likes.length}
      {' '}
      <Favorite color={isLikedByUser ? '#be004c' : '#999898'} />
    </span>
  );
}
export default LikePostButton;

// we want the like button to like if the user is logged in
// remembers if user has liked post
// if a user has liked the post the hear is a different color and user can unlike
// user can only like once
// show like count
