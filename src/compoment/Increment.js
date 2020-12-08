import React, {Component} from 'react';

const uphed={
    display: "flex",
    justifyContent: "center",
}
 const counterdiv={
        marginTop:"24px",
        marginLeft:"23px",
 }
 const scdiv={
            display:"flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "-120px",
    marginLeft: "125px",
 }
 const partiephotoettext={
         border: "solid 3px gray",
     borderRadius: "8px",
   
     height: "22px",
 }
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
            <div style={uphed} >
                <div style={counterdiv}>
                {counter} secondes ont passées
                </div>
                <div style={scdiv} >
                <h2> hello <br/> i will present my self <br/>
          I'm {profile.fullName} <br/> my bio : { profile.bio} 
          i'm a {profile.profession }<br/> {profile.imgSrc} </h2>
       </div>
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
