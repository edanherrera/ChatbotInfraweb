class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes("hola")) {
        this.actionProvider.greet();
      }
      if (lowercase.includes("horario") || lowercase.includes("hr")) {
        this.actionProvider.handleJavascriptQuiz();
      }
      if (lowercase.includes("productos") || lowercase.includes("pr")) {
        this.actionProvider.handleJavascriptProducts();
      }
      if (lowercase.includes("ofertas") || lowercase.includes("of")) {
        this.actionProvider.handleJavascriptOfer();
      }
      if (lowercase.includes("Domicilio") || lowercase.includes("dom")) {
        this.actionProvider.dom();
      }else{
        this.actionProvider.err();
      }
    }
  }
  
  export default MessageParser;