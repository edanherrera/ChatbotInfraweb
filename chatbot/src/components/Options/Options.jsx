import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Horario",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
    },
    { text: "Productos", 
    handler: props.actionProvider.handleJavascriptProducts, 
    id: 2 },
    { text: "Ofertas", 
    handler: props.actionProvider.handleJavascriptOfer, 
    id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
