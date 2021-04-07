import React from "react";
import ReactDOM from "react-dom";
import cont from "App";
import "./style.css";

/*
class Button_add extends React.Component{
  construtor(props){
    super(props);
    this.Button_add = this.Button_add.bind(this);
    this.state = { text };
  }

  actionButtonAdd(event){
    this.setState({

    });
  }

}*/

function hola() {
  alert("1");
}

export default function ButtonAdd() {
  return (
    <button class="button-add" onClick={hola}>
      Add
    </button>
  );
}
