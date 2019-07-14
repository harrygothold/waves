import React from "react";
import Card from "./Card";

const CardBlock = props => {
  const renderCards = () =>
    props.list && props.list.map((card, i) => <Card key={i} {...card} />);

  return (
    <div className="card_block">
      <div className="container">
        {props.title && <div className="title">{props.title}</div>}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          {renderCards(props.list)}
        </div>
      </div>
    </div>
  );
};

export default CardBlock;
