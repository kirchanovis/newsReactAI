import React from 'react';

type CommentType = {
  id: number;
  avatarUrl: string;
  author: string;
  time: string;
  text: string;
}

type Props = {
  comments:  CommentType[]
}

const Comments = ({ comments }: Props) => {
  return (
    <div className="comments">
      {comments.map((comment: CommentType) => (
        <div key={comment.id} className="comment">
          <img src={comment.avatarUrl} alt="User Avatar" className="comment__avatar" />
          <div className="comment__content">
            <div className="comment__header">
              <h3 className="comment__author">{comment.author}</h3>
              <span className="comment__time">{comment.time}</span>
            </div>
            <p className="comment__text">{comment.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
