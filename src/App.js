import "./App.css";
import React from "react";
/** Components */
import Form from "./Components/Form";
import Header from "./Components/Header";
import Card from "./Components/Card";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Todo List Ku",
      listInput: [
        {
          inputType: "text",
          value: "",
        },
      ],
      listTodo: [],
    };
  }

  stateChanged = (value, index) => {
    const newListInput = this.state.listInput.map((input, inputIdx) => {
      return {
        ...input,
        value: value,
      };
    });
    this.setState({
      listInput: newListInput,
    });
  };

  checkedChange = (value, index) => {
    // console.log(value);

    const newListTodo = this.state.listTodo.map((todo, todoIdx) => {
      if (todoIdx === index) {
        return {
          ...todo,
          checked: value,
        };
      }
      return todo;
    });
    this.setState({
      listTodo: newListTodo,
    });
  }
  deleteTodo = (index) => {
    const newListTodo = this.state.listTodo.filter((todo, todoIdx) => {
      if (todoIdx !== index) {
        // return selain card yang dipilih
        return {
          todo
        };
      }
    });
    // console.log(newListTodo);
    // ubah state
    this.setState((state) => {
      return { ...state, listTodo: newListTodo };
    });
  }
  addToList = () => {
    const newListTodo = [...this.state.listTodo];

    const obj = {
      todo: this.state.listInput[0].value,
      checked: false,
    };

    newListTodo.push(obj);

    this.setState((state) => {
      return { ...state, listTodo: newListTodo };
    });
    this.setState((state) => {
      return state.listInput[0].value = "";
    });
  };

  render() {
    return (
      <div className="App">
        <Header title={this.state.title} />
        <Form
          listInput={this.state.listInput}
          stateChanged={this.stateChanged}
          addToList={this.addToList}
        />
        <Card
          listTodo={this.state.listTodo}
          checkedChange={this.checkedChange}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
