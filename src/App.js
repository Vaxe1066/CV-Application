import './styles/App.css';
import './styles/Navbar.css';
import AddImageSvg from './photo.svg';
import Navbar from './components/Navbar.js';
import Output from './components/Output.js';
import Info from './components/Info.js';
import React, {Component} from "react";


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      output: false,
      fname: '',
      lname: '',
      title: '',
      img: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleImg = this.handleImg.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = (name, newVal) => {
    this.setState({[`${name}`]: newVal})
  }


  handleImg(event){
    this.setState({img: URL.createObjectURL(event.target.files[0])});
  }

  handleSubmit(event){
    this.setState({output: true});
    event.preventDefault();
  }




  render() {
    console.log(this.state.img)

    let varOut = '';
    if(!this.state.output){
      varOut =  <form  className='personal-info js-personal-info' onSubmit={evt => this.handleSubmit(evt)} >
                    <Info fname={this.state.fname} lname={this.state.lname} title={this.state.title} onChange={this.handleChange} />
                    <label htmlFor="img">Upload Cover Photo:</label>
                    <input type="file" id="img" name="img" accept="image/*" onChange={this.handleImg} />
                </form>
    }
    else if(this.state.output){
      varOut = <Output fname={this.state.fname} lname={this.state.lname} img={this.state.img}/>;
    }

    return (
      <div className="App">
        <Navbar/>
        {varOut};
      </div>
      
    );
  }

}



      /*<form  className='personal-info js-personal-info' onSubmit={evt => this.handleSubmit(evt)} >
                <h3>Personal Information</h3>
                <input id="first-name js-first-name" placeholder='First Name' type="text" value={this.state.fname} onChange={this.handleChange}/>
                <input id="last-name js-last-name" placeholder='Last Name' type="text" value={this.state.lname} onChange={this.handleChange}/>
                <input id="title-info js-title-info" placeholder='Title' type="text" value={this.state.title} onChange={this.handleChange}/>
                <label htmlFor="img">Upload Cover Photo:</label>
                <input type="file" id="img" name="img" accept="image/*" />
                <input type="submit" value="Submit" />
              </form>*/



export default App;