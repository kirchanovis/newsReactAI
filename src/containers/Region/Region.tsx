import React from "react";
import { Comments } from "../../components/Comments";
import { SocialLinks } from "../../components/SocialLinks";

type Props = {
  title: string;
  text: string;
  author: string;
  date: Date;
};

function Region() {

  return (
    <div className="news">
      <h2>Новость Ставрополя</h2>
      <img src="https://picsum.photos/800/500" alt="Новость" />
      <p>Автор: Иван Иванов</p>
      <p>Дата публикации: 23 марта 2023 года</p>
      <p>
        Политик обратился к жителям города со словами: "Я очень рад, что могу
        быть здесь с вами сегодня. Мы сделаем все, чтобы наш город был
        процветающим и успешным."
      </p>
      <p>
        В последние дни в социальных сетях обсуждается новость о том, что в
        Ставрополе начнется ремонт дорог. Многие жители города выражают
        недовольство по поводу того, что ремонтные работы будут проводиться в
        часы пик, когда многие люди едут на работу или домой.
      </p>
      <blockquote className="tweet">
        <p>Текст твита из Twitter</p>
      </blockquote>
      <p>
        Несмотря на это, глава города подчеркивает, что ремонт дорог является
        необходимым мероприятием и просит жителей проявить терпение и
        понимание.
      </p>
      <SocialLinks likes={12} views={128} />
      <Comments
        comments={[
            {
                id: 1,
                avatarUrl: 'https://i.pravatar.cc/50',
                author: 'Иван Петров',
                time: '10 минут назад',
                text: 'Очень интересная новость! Надеюсь, что ремонт дорог пройдет без проблем.',
            },
            {
                id: 1,
                avatarUrl: 'https://i.pravatar.cc/50',
                author: 'Мария Сидорова',
                time: '5 минут назад',
                text: 'Я тоже с нетерпением жду начала ремонта дорог. Надеюсь, что они будут сделаны качественно.',
            }
        ]}
      />
    </div>
  );
}

export default Region;
