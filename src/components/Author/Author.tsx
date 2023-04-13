import React from 'react';

type Props = {
  avatar: string;
  name: string;
  date: string;
  onSubscribe: () => void;
};

const Author: React.FC<Props> = ({ avatar, name, date, onSubscribe }) => {
  return (
    <div className="author">
      <div className="author-avatar">
        <img src={avatar} alt="Аватар автора" />
      </div>
      <div className="author-info">
        <h4 className="author-name">{name}</h4>
        <p className="author-date">{date}</p>
      </div>
      <div className="author-subscribe">
        <button onClick={onSubscribe}>Подписаться</button>
      </div>
    </div>
  );
};

export default Author;
