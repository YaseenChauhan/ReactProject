import React, { Component,useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    person : [
      {capacity :"80ml", days : "1"},
      {capacity : "40ml", days:"5"},
      {capacity:"70ml", days :"10"}
    ],
    otherState : 'some other things'
  }
  switchNameHandler = (newCapacity) => {
    //dont do  this.state.person[0].capacity ="100ml"
    this.setState({
        person : [
          {capacity :newCapacity, days : "1"},
        {capacity : "40ml", days:"5"},
        {capacity:"70ml", days :"7"}
        ]
    })
    
  }
  changeInputHandler = (event) => {
    this.setState({
      person : [
      {capacity :"80ml", days : "1"},
      {capacity : "40ml", days:"5"},
      {capacity:event.target.value, days :"7"}
      ]
  })
  }
  render() {
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    };
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
       onClick={() => this.switchNameHandler("100ml")}>
       Change state
       </button>

      <Person 
      capacity={this.state.person[0].capacity} 
      days={this.state.person[0].days}
      />
      <Person 
      click={() => this.switchNameHandler("100ml")}
      capacity={this.state.person[1].capacity} 
      days={this.state.person[1].days}>
      My consumption
      </Person>

      <Person
      change={this.changeInputHandler}
      capacity={this.state.person[2].capacity} 
      days={this.state.person[2].days}
      />
    </div>
        //React.createElement('div',{className:'App'},React.createElement('h1',null,'Assalam u alaikum'))
    );
  }
}

export default App;










// const app = (props) => {

//   const [Persons,setPersonState] = useState({
//     person : [
//             {capacity :"80ml", days : "1"},
//             {capacity : "40ml", days:"5"},
//             {capacity:"70ml", days :"10"}
//           ]
//         }
//   );
  
//   const [otherState,setOtherState] = useState('some other things')
//   const switchChangeHandler = () => { 
//     setPersonState(
//       {
//         person : [
//           {capacity :"100ml", days : "1"},
//         {capacity : "40ml", days:"5"},
//         {capacity:"70ml", days :"7"}
//         ]
//       }
//     )
//   }
//     return (
//       <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to React</h1>
//       </header>
//       <p className="App-intro">
//         To get started, edit <code>src/App.js</code> and save to reload.
//       </p>
//       <button onClick={switchChangeHandler}>Change state</button>

//       <Person 
//        capacity = {Persons.person[0].capacity}
//        days = {Persons.person[0].days}
//        />

//       <Person 
//       capacity = {Persons.person[1].capacity}
//       days = {Persons.person[1].days}>
//       My consumption
//       </Person>

//       <Person
//       capacity = {Persons.person[2].capacity} 
//       days = {Persons.person[2].days}
//       />
//     </div>
    
//     );
//   }


// export default app;






/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */