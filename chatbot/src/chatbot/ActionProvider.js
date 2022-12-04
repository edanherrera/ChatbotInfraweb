class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }


  greet = () => {
    const message = this.createChatBotMessage("¡Hola! Bienvenido a nuestra ferretería.");
    this.addMessageToState(message);
  };
  dom = () => {
    const message = this.createChatBotMessage("Nuestro domicilio es: calle jacaranda #40, Tepic, Nay.");
    this.addMessageToState(message);
  };
  err = () => {
    const message = this.createChatBotMessage("Disculpa, no he logrado entenderte.");
    this.addMessageToState(message);
  };

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Excelente. Nuestros horarios son los siguientes.",
      {
        widget: "horario",
      }
    );

    this.addMessageToState(message);
  };
  handleJavascriptProducts = () => {
    const message = this.createChatBotMessage(
      "Excelente. Nuestro catalogo es el siguiente.",
      {
        widget: "productos",
      }
    );

    this.addMessageToState(message);
  };
  handleJavascriptOfer = () => {
    const message = this.createChatBotMessage(
      "Excelente. Nuestras ofertas son las siguientes.",
      {
        widget: "ofertas",
      }
    );

    this.addMessageToState(message);
  };
  
  
  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

 }
 
 export default ActionProvider;