
import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: props.slides,
      index: 0,
    };
  }

  render() {
    
    const { index, slides } = this.state;

    return (
       <>
        <h1 id="title" data-testid="title">{slides[index].title}</h1>
        <p id="text" data-testid="text">{slides[index].text}</p>
        <button id="button-prev" data-testid="button-prev" disabled={index == 0} onClick={()=>{
          this.setState((prevValue)=>{
            return {index : prevValue.index-1}
          })
        }}>Prev</button>
        <button id="button-restart" data-testid="button-restart" onClick={()=>{
          this.setState((prevValue)=>{
            return {index : 0}
          })
        }}>Restart</button>
        <button id="button-next" data-testid="button-next" disabled={index == 4} onClick={()=>{
          this.setState((prevValue)=>{
            return {index : prevValue.index+1}
          })
        }}>Next</button>
      </>
    );
  }
}

export default App;

