import React, { useState } from "react";

import FlashCard from "./FlashCard";
import FlashCard1 from "./FlashCardPro";
import FlashCard2 from "./FlashCardOfer";
const Quiz = (props) => {
  let [questionIndex, setQuestionIndex] = useState(0);
  
  const incrementIndex = () => setQuestionIndex((prev) => (prev += 1));
  
  const currentQuestion = props.questions[questionIndex];
  
  if (!currentQuestion) {
    return <p>Excelente día.</p>;
  }
  if(currentQuestion.question == "Productos electronicos" ||currentQuestion.question == "Plomeria"){
    return (
      <FlashCard1
      question={currentQuestion.question}
      answer={currentQuestion.answer}
      incrementIndex={incrementIndex}
      />
      );
    }
    if(currentQuestion.question == "De lunes a viernes." || currentQuestion.question == "Horario de fin de semana."){
      return (
        <FlashCard
        question={currentQuestion.question}
        answer={currentQuestion.answer}
        incrementIndex={incrementIndex}
        />
        );
      }
      if(currentQuestion.question == "Oferta" || currentQuestion.question == "Ofertas"){
        return (
          <FlashCard2
          question={currentQuestion.question}
          answer={currentQuestion.answer}
          incrementIndex={incrementIndex}
          />
          );
        }
      };
      
      export default Quiz;
      