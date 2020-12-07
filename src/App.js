import logo from './logo.svg';
import './App.css';
import React,{Component} from "react";


class App extends React.Component{
   state = {
   fullName:"Ben Salah Meriam",
   bio:"everything and nothing",
   imgSrc:<img src="./img/photo-de-profil.jpg"/>,
   profession:"ingenieur en bioindus",

 };

  handleClick=()=>this.setState({fullName:"Aya", bio:"laugh",imgSrc:<img src="./img/photo-de-prof.jpg"/>,profession:"Webdevp"})
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <h2> hello <br/> i will present my self <br/>
        I'm {this.state.fullName} <br/> my bio : { this.state.bio} 
         <br/>{this.state.imgSrc} <br/> and i'm a {this.state.profession}</h2>
        <p>click to discover our guest </p>
       <button onClick={this.handleClick}> ClickMe</button>
      </header>
    </div>
  );
  }
}

//  function App() {
//   return (
//      <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          Edit <code>src/App.js</code> and save to reload.
//          </p>
//         <a
//           className="App-link"          href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//        >
//           Learn React
//         </a>
//       </header>
//     </div>
//    );
//  }

export default App;
