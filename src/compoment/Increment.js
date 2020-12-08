import React, {Component} from 'react';

class Increment extends Component {

    constructor(props) {
        super(props);
        this.state={
            counter : 0,
        };
    }
    componentDidMount() {
        setInterval(() => {
            const { counter } = this.state;
            this.setState({
                counter: counter + 1
            })
        }, 1000);
    }
    
//        state = {
//      fullName:"Ben Salah Meriam",
//      bio:"everything and nothing",
//      imgSrc:<img src="./img/photo-de-profil.jpg"/>,
//     profession:"ingenieur en bioindus",

//    }
//       }
    render() {
        const { counter } = this.state;
        const {profile}=this.props;
        return (
            <div>
                {counter} secondes ont passées
                <h2> hello <br/> i will present my self <br/>
          I'm {profile.fullName} <br/> my bio : { profile.bio} 
            <br/>{profile.imgSrc} <br/> and i'm a {profile.profession}</h2>
       
                </div>
        )
        }
    }
//       handleClick=()=>this.setState({fullName:"Aya", bio:"laugh",imgSrc:<img src="./img/photo-de-prof.jpg"/>,profession:"Webdevp"})
    
//     render()
//     {    
//          return (     <div className="App">              <header className="App-header">           <parent/>
//             <h2> hello <br/> i will present my self <br/>
//          I'm {this.state.fullName} <br/> my bio : { this.state.bio} 
//            <br/>{this.state.imgSrc} <br/> and i'm a {this.state.profession}</h2>
//         <p>click to discover our guest </p>
//          <button onClick={this. handleClick}> ClickMe</button>
//       </header>
//       </div>
//         );
//    }
 

 


export default Increment;
