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










// class App extends Component {
//   state = {
//     person : [
//       {id : 'ass1',capacity :"80", days : "1"},
//       {id : 'afgs41',capacity : "40", days:"5"},
//       {id : 'arrr12',capacity:"70", days :"10"}
//     ],
//     otherState : 'some other things',
//     showPersons :  false
//   }
      
//   changeInputHandler = (event,id) => {
//     const index = this.state.person.findIndex((per) => {
//       return per.id === id; 
//     });
//     const cap = {...this.state.person[index]};
//     //const person = Object.assign({},this.state.person[index]);
//     cap.capacity = event.target.value;

//     const persons = [...this.state.person];
//     persons[index] = cap;
    
//     this.setState({person : persons});
//   }
//   togglePersonHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({showPersons : !doesShow});
//   }

//   deletePersonhandler = (index) => {
//     const person = [...this.state.person];
//     person.splice(index,1);
//     this.setState({person : person})
//   }
//   render() {
//     const style = {
//       backgroundColor : 'green',
//       color : 'white',
//       font : 'inherit',
//       border : '1px solid white',
//       borderRadius : '5px',
//       padding : '8px',
//       cursor : 'pointer',
//       marginTop : '10px',
//       ':hover' : {
//         backgroundColor : 'lightgreen',
//         color : 'black'
//       }
//     };
//     let persons = null;
//     if(this.state.showPersons){
//       persons = (
//             <div>
//               {this.state.person.map((per,index) => {
//                 return <ErrorBoundary key={per.id}>
//                       <Person
//                         click={() => this.deletePersonhandler(index)}
//                         change= {(event) => this.changeInputHandler(event,per.id)}
//                         capacity={per.capacity} 
//                         days={per.days}
//                         />
//                         </ErrorBoundary>
//               })}
//        </div>
//       )
//       style.backgroundColor = 'red';
//       style[':hover'] = {
//         backgroundColor : 'salmon',
//         color : 'black'
//       }
//        }
//        const classes = [];

//        if(this.state.person.length <=2)
//        classes.push('go')

//        if(this.state.person.length <=1)
//        classes.push('down')

       
    
//     return (
//       <StyleRoot>
//         <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to React</h1>
//       </header>
//       <p className={classes.join(' ')}>Here we go down.........</p>
//       <button 
//        style = {style}
//        onClick={this.togglePersonHandler}>
//        Change state
//        </button>
//        {persons}
//        </div> 
//       </StyleRoot>
      
//     );
//   }
// }



// export default Radium(App);

// class App extends Component {
//   state = {
//     person : [
//       {id : 'ass1',capacity :"80", days : "1"},
//       {id : 'afgs41',capacity : "40", days:"5"},
//       {id : 'arrr12',capacity:"70", days :"10"}
//     ],
//     otherState : 'some other things',
//     showPersons :  false
//   }
      
//   changeInputHandler = (event,id) => {
//     const index = this.state.person.findIndex((per) => {
//       return per.id === id; 
//     });
//     const cap = {...this.state.person[index]};
//     //const person = Object.assign({},this.state.person[index]);
//     cap.capacity = event.target.value;

//     const persons = [...this.state.person];
//     persons[index] = cap;
    
//     this.setState({person : persons});
//   }
//   togglePersonHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({showPersons : !doesShow});
//   }

//   deletePersonhandler = (index) => {
//     const person = [...this.state.person];
//     person.splice(index,1);
//     this.setState({person : person})
//   }
//   render() {
//     const style = {
//       backgroundColor : 'white',
//       font : 'inherit',
//       border : '1px solid blue',
//       padding : '8px',
//       cursor : 'pointer'
//     };
//     let persons = null;
//     if(this.state.showPersons){
//       persons = (
//             <div>
//               {this.state.person.map((per,index) => {
//                 return <Person
//                         click={() => this.deletePersonhandler(index)}
//                         change= {(event) => this.changeInputHandler(event,per.id)}
//                         capacity={per.capacity} 
//                         days={per.days}
//                         key={per.id}/>
//               })}
//        </div>
//       )
//        }
    
//     return (
//       <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to React</h1>
//       </header>
//       <p className="App-intro">
//         To get started, edit <code>src/App.js</code> and save to reload.
//       </p>
//       <button 
//        style = {style}
//        onClick={this.togglePersonHandler}>
//        Change state
//        </button>
//        {persons}
//        </div> 
//     );
//   }
// }




// class App extends Component {
//   state = {
//     userInput : ''
//   }
//   inputChangeHandler = (event) => {
//     this.setState({userInput : event.target.value})
//   }
//   deleteCharhandler = (index) => {
//     const text = this.state.userInput.split('');
//     text.splice(index,1);
//     const updatedText = text.join('');
//     this.setState({userInput : updatedText});
//   }
//   render() {
//     const CharList = this.state.userInput.split('').map((c,index) => {
//       return <Char 
//               value={c}
//               key={index}
//               clicked={() => this.deleteCharhandler(index)}
//         />
//     })
//     return (
//       <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to React</h1>
//       </header>
//       <p className="App-intro">
//         To get started, edit <code>src/App.js</code> and save to reload.
//       </p>
//       <hr/>
//       <input type="text" 
//               onChange={this.inputChangeHandler}
//               value={this.state.userInput}/>
//               <Validation inputLength={this.state.userInput.length}/>

//       <p>Entered value : {this.state.userInput}</p>

//       {CharList}
//        </div> 
//     );
//   }
// }



// class App extends Component {
//   state = {
//     person : [
//       {capacity :"80ml", days : "1"},
//       {capacity : "40ml", days:"5"},
//       {capacity:"70ml", days :"10"}
//     ],
//     otherState : 'some other things',
//     showPersons :  false
//   }
//   switchNameHandler = (newCapacity) => {
//     //dont do  this.state.person[0].capacity ="100ml"
//     this.setState({
//         person : [
//           {capacity :newCapacity, days : "1"},
//         {capacity : "40ml", days:"5"},
//         {capacity:"70ml", days :"7"}
//         ]
//     })
//   }
      
//   changeInputHandler = (event) => {
//     this.setState({
//       person : [
//       {capacity :"80ml", days : "1"},
//       {capacity : "40ml", days:"5"},
//       {capacity:event.target.value, days :"7"}
//       ]
//   })
//   }
//   togglePersonHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({showPersons : !doesShow});
//   }
//   render() {
//     const style = {
//       backgroundColor : 'white',
//       font : 'inherit',
//       border : '1px solid blue',
//       padding : '8px',
//       cursor : 'pointer'
//     };
//     let persons = null;
//     if(this.state.showPersons){
//       persons = (
//             <div>
//          <Person 
//             capacity={this.state.person[0].capacity} 
//             days={this.state.person[0].days}
//             />
//             <Person 
//             click={() => this.switchNameHandler("100ml")}
//             capacity={this.state.person[1].capacity} 
//             days={this.state.person[1].days}>
//             My consumption
//             </Person>

//             <Person
//             change={this.changeInputHandler}
//             capacity={this.state.person[2].capacity} 
//             days={this.state.person[2].days}
//           />
//        </div>
//       )
//        }
    
//     return (
//       <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to React</h1>
//       </header>
//       <p className="App-intro">
//         To get started, edit <code>src/App.js</code> and save to reload.
//       </p>
//       <button 
//        style = {style}
//        onClick={this.togglePersonHandler}>
//        Change state
//        </button>
//        {persons}
//        </div> 
//     );
//   }
// }

// class App extends Component {
  
//   state = {
//     users : [
//       "Muhamamd","Yaseen","Chauhan"
//     ]
//   }
//   nameChangeHandler = (event) => {
//     this.setState({
//       users : [
//         "Muhamamd","Yaseen",event.target.value
//       ]
//     });
//   };

//   render() {
//    return (
//       <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to React</h1>
//       </header>
//       <p className="App-intro">
//         To get started, edit <code>src/App.js</code> and save to reload.
//       </p>
//     <UserInput changed = {this.nameChangeHandler} currentName={this.state.users[2]}/>
//     <UserOutput userName={this.state.users[0]}/>
//     <UserOutput userName={this.state.users[1]}/>
//     <UserOutput userName={this.state.users[2]}/>
//     </div>
//     );
//   }
// }





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