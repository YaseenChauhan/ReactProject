import React, { Component,useState } from 'react';
import Radium, {StyleRoot} from 'radium';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';



class App extends Component {
  state = {
    person : [
      {id : 'ass1',capacity :"80", days : "1"},
      {id : 'afgs41',capacity : "40", days:"5"},
      {id : 'arrr12',capacity:"70", days :"10"}
    ],
    otherState : 'some other things',
    showPersons :  false
  }
      
  changeInputHandler = (event,id) => {
    const index = this.state.person.findIndex((per) => {
      return per.id === id; 
    });
    const cap = {...this.state.person[index]};
    //const person = Object.assign({},this.state.person[index]);
    cap.capacity = event.target.value;

    const persons = [...this.state.person];
    persons[index] = cap;
    
    this.setState({person : persons});
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  deletePersonhandler = (index) => {
    const person = [...this.state.person];
    person.splice(index,1);
    this.setState({person : person})
  }
  render() {
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    };
    let persons = null;
    if(this.state.showPersons){
      persons = (
            <div>
              {this.state.person.map((per,index) => {
                return <Person
                        click={() => this.deletePersonhandler(index)}
                        change= {(event) => this.changeInputHandler(event,per.id)}
                        capacity={per.capacity} 
                        days={per.days}
                        key={per.id}/>
              })}
       </div>
      )
       }
    
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <button 
       style = {style}
       onClick={this.togglePersonHandler}>
       Change state
       </button>
       {persons}
       </div> 
    );
  }
}

export default App;
