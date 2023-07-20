import React from "react";

type Props = {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
};

const Descructuring = ({ title, content, commentsQty, tags }: Props) => {
  //ação de desctructuring: {<nomevar>}: type(Props)
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentsQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Descructuring;
