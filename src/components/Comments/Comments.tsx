import React from 'react';
import { CommentProps } from '../Comment/Comment';
import { Comment } from '../Comment';

type CommentsProps = {
  comments: CommentProps[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <div className="comments">
      {comments.map(comment => <Comment key={comment.id} {...comment} />)}
    </div>
  );
};

export default Comments;
