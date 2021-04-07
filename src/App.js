import React from "react";
import ReactDOM from "react-dom";
import ButtonAdd from "./button-add";
import "./style.css";

class input_text extends React.Component{
    construtor(props){
        //super(props);
        this.getTextinput = this.getTextinput.bind(this);
        this.state = { text};
    }

    getTextinput(event){
        this.setState({
          Text ="hola"
        });
    }

    render(){
      return(
          <div class="recuadro-nota-content">
           <div id="writer-nota" class="writer-nota">
             <textarea id="content-text" class="input-text" placeholder="Agregar Comentario" />
             <ButtonAdd />
            </div>
            <div class="read-note" />
         </div>
      );
    }
}
/*
export default function App() {
  return (
    <div class="recuadro-nota-content">
      <div id="writer-nota" class="writer-nota">
        <textarea id="content-text" class="input-text" placeholder="Agregar Comentario" />
        <ButtonAdd />
      </div>
      <div class="read-note" />
    </div>
  );
}
*/