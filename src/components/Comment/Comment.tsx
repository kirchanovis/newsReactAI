import React from 'react';

export type CommentProps = {
  id: number;
  avatarUrl: string;
  author: string;
  time: string;
  text: string;
  replies?: CommentProps[];
}

const Comment: React.FC<CommentProps> = ({ author, avatarUrl, time, text, replies }) => {
    return (
      <div className="comment">
        <div className="comment__header">
          <img src={avatarUrl} alt={author} className="comment__photo" />
          <div className="comment__author">
            <h4 className="comment__name">{author}</h4>
            <p className="comment__time">{time}</p>
          </div>
        </div>
        <p className="comment__text">{text}</p>
        {replies && replies.map(reply => <Comment key={reply.time} {...reply} />)}
      </div>
    );
  };

  export default Comment;