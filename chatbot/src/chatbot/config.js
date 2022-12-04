import { createChatBotMessage } from "react-chatbot-kit";


import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";

const config = {
  botName: "Chatbot Ferreteria", 
  initialMessages: [
    createChatBotMessage(`Hola. ¿Qué deseas saber?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "horario",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "De lunes a viernes.",
            answer:
            "8:00 am a 2:00 pm | 4:00 pm a 8:00 pm",
            id: 1,
          },
          {
            question: "Horario de fin de semana.",
            answer:
            "10:00 am a 2:00 pm",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "productos",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Productos electronicos",
            answer:
            "Esmeriladora"+"\n"+"Rotomartillo"+"\n"+"Multimetro",
            id: 1,
          },
          {
            question: "Plomeria",
            answer:
            "Tubo PVC"+"\n"+"Cople PVC"+"\n"+"Resistol 2000",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "ofertas",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Ofertas",
            answer:
            "Saco de cemento de $500 a $400",
            id: 1,
          },
          {
            question: "Oferta",
            answer:
            "Tubo PVC $40 el metro a $35 el metro",
            id: 2,
          },
        ],
      },
    },
    
  ],
  
}

export default config