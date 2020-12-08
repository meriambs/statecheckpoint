import Increment from './compoment/Increment';
import React, {Component} from 'react';

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
    <div className="App">
      <header className="App-header">
        
        <button onClick={this.toggleShow.bind(this)}>toggle counter</button>
        
          {showCounter &&
          <Increment profile={this.state.profile} />
          }
      
      </header>
    </div>
  );
}
}
  


export default App;
