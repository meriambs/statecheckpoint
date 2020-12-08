import Increment from './compoment/Increment';
import React, {Component} from 'react';

 const buttonn={
       background: "#b1c3e0",
    color: "#272323",
   width: "203px",
     height: "49px",
   borderRadius: "18px",
     border: "thin solid #c1bdbd",
     boxShadow: "4px 5px 1px #ccc3c3",
     whiteSpace: "nowrap",
 }
 const headcss={
       display: "flex",
     justifyContent: "center",
     marginTop: "143px",
 }


class App extends Component {

  constructor(props) {
      super(props);
      this.state={
          showCounter : false,
          profile:{
            fullName:"Ben Salah Meriam",
            bio:"everything and nothing",
            imgSrc:<img src="./img/photo-de-profil.jpg"/>,
            profession:"ingenieur en bioindus",
                  }
      };
  }
  toggleShow() {
    const { showCounter } = this.state;
    this.setState({
      showCounter: !showCounter
    })
  }
  render() {
    const { showCounter } = this.state;
    return (
    <div className="App" style={headcss} >
      <header className="App-header">
        
        <button style={buttonn} onClick={this.toggleShow.bind(this)}>toggle counter</button>
        
          {showCounter &&
          <Increment profile={this.state.profile} />
          }
      
      </header>
    </div>
  );
}
}
  


export default App;
