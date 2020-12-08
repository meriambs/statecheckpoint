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
        fontSize: "39px",
    lineHeight:"53px",
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
    
    render() {
        const { counter } = this.state;
        const {profile}=this.props;
        return (
            <div style={uphed} >
              
                <div style={counterdiv}>
                {counter} secondes ont passées
                </div>
                <div style={scdiv} >
                <h2 style={partiephotoettext} > Hello <br/> I will present my self : <br/>
          I'm {profile.fullName} <br/>
          i'm a {profile.profession }<br/>
          -----------------------------<br/>
          My bio : { profile.bio} <br/> {profile.imgSrc} </h2>
       </div>
                </div>
        )
        }
    }

export default Increment;
