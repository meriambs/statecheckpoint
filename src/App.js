import Increment from './compoment/Increment';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Navbar,Nav,Form,FormControl,Button,} from 'react-bootstrap';
import { BsFillHouseFill } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";

import { SiGithub } from "react-icons/si";
import { DiJsBadge }from "react-icons/di";

 const buttonn={
       background: "#b1c3e0",
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
  const partiphoto={
     height: "225px",
    marginTop: "-46px",
  borderRadius: "109px",
  marginLeft: "594px",
 }


class App extends Component {

  constructor(props) {
      super(props);
      this.state={
          showCounter : false,
          profile:{
            fullName:"Ben Salah Meriam",
            bio:"everything and nothing",
            imgSrc:<img style={partiphoto} src="./img/photo-de-profil.jpg"/>,
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
      
   <div>
         <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Profil</Navbar.Brand>
        <Nav className="mr-auto">
         <Nav.Link href="#home">Home</Nav.Link>
         <Nav.Link href="#features">First Articl</Nav.Link>
        <Nav.Link href="#pricing">Second Articl</Nav.Link>
        </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
      </Navbar>
       <div className="App" style={headcss} >
      <header className="App-header">
        
        <button style={buttonn} onClick={this.toggleShow.bind(this)}>toggle counter</button>
        
          {showCounter &&
          <Increment profile={this.state.profile} />
          }
      
      </header>
    </div>
    <div style={iconpart} >
     <div style={mailpart} >
        <div  style={badg}  >
       <BsBriefcase ></BsBriefcase>
       </div>
      <h5  >bensalah.meriem0@gmail.com</h5>
      </div>
      <div style={mailpart}   >
        <div  style={badg}  >
          <a  href="https://github.com/meriambs" >
         <SiGithub/>
         </a>
         </div>
      <h5  >gitpart</h5>
      </div>
      <div style={mailpart}  >
        <div  style={badg}  >
          <a  href="https://www.codewars.com/users/MeriambenS">
        <DiJsBadge/>
        </a>
        </div>
      <h5  >codewars</h5>
      </div>
     
  
   </div>
    </div>
  );
}
}
  


export default App;
