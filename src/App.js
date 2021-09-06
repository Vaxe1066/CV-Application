import './styles/App.css';
import './styles/Navbar.css';
import AddImageSvg from './photo.svg';
import Navbar from './components/Navbar.js';
import Output from './components/Output.js';
import Info from './components/Info.js';
import Education from './components/Education.js';
import React, {Component} from "react";
import uniqid from "uniqid";


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      output: false,
      fname: '',
      lname: '',
      title: '',
      img: '',
      houseNo: '',
      streetName: '',
      postCode:'',
      county: '',
      country:'',
      personalStat: '',

      countEdu: 2,

      eduObj: {
        university: '',
        city: '',
        degree: '',
        subject: '',
        from: '',
        to: '',
        //id: uniqid(),
      },

      educationLst: [

      ],

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this)
    this.handleDelete = this.handleDelete.bind(this);
    this.addEducation = this.addEducation.bind(this);
  }


  handleChange = (name, newVal) => {
    this.setState({[`${name}`]: newVal})
  }


  handleImg(filename){
    this.setState({img: URL.createObjectURL(filename)});
  }


  handleChangeEducation(eduId, eduClassName, eduValue) {
    let idx = eduId;
    let idxRep = Number(idx.replace(/\D+/g, ''));
    let newObj = this.state.educationLst[idxRep];
    newObj[`${eduClassName}`] = eduValue
    let newLst = [...this.state.educationLst];
    newLst[idxRep] = newObj;
    this.setState({
      educationLst: newLst
    })

  }



  handleSubmit(event){
    this.setState({output: true});
    event.preventDefault();
  }


  handleDelete(deleteIdx){
    let idxRep = Number(deleteIdx.replace(/\D+/g, ''));
    let newLst = [...this.state.educationLst];
    newLst.splice(idxRep, 1);
    this.setState({
      educationLst: newLst
    })
    
  }

  addEducation(event){
    let newIdObj = this.state.eduObj;
    newIdObj['id'] = uniqid();
    this.setState({
      eduObj: {
        university: '',
        city: '',
        degree: '',
        subject: '',
        from: '',
        to: '',
        id: uniqid(),
      },
      educationLst: [...this.state.educationLst, this.state.eduObj],
    })
    event.preventDefault();
  }




  render() {
    console.log(this.state.educationLst)


    let varOut = '';
    if(!this.state.output){
      varOut =  <form  className='personal-info js-personal-info' onSubmit={evt => this.handleSubmit(evt)} >
                    <Info fname={this.state.fname} lname={this.state.lname} title={this.state.title} 
                          houseNo={this.state.houseNo}
                          streetName={this.state.streetName} 
                          postCode={this.state.postCode}
                          county={this.state.county} 
                          country={this.state.country} 
                          personalStat = {this.state.personalStat} 
                          onChange={this.handleChange}
                          onChangeImg = {this.handleImg} />
                    <Education educationLst = {this.state.educationLst} onChange={this.handleChangeEducation} 
                                onClick={this.handleDelete}/>
                    <input type="button" value="Add Education" className="add-education" onClick={this.addEducation}/>

                    <input type="submit" value="Submit" />
                </form>
                
    }
    else if(this.state.output){
      varOut = <Output title={this.state.title} fname={this.state.fname} 
                        lname={this.state.lname} 
                        img={this.state.img} 
                        houseNo={this.state.houseNo}
                        streetName={this.state.streetName} 
                        postCode={this.state.postCode}
                        county={this.state.county} 
                        country={this.state.country} 
                        personalStat = {this.state.personalStat} 
                        educationItems = {this.state.educationLst} />;
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