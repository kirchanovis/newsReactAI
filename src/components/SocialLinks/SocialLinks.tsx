import React from 'react';

type Props = {
    likes: number;
    views: number;
  };
  

const SocialLinks = ({ likes, views }: Props) => {
  return (
    <div>
      <a href="#">faFacebookSquare</a><br />
      <a href="#">faTwitterSquare</a><br />
      <a href="#">faInstagramSquare</a><br />
      <span>{likes} Likes</span>
      <span>{views} Views</span>
    </div>
  );
};

export default SocialLinks;
