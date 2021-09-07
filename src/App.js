import './styles/App.css';
import './styles/Navbar.css';
import './styles/Output.css';
import AddImageSvg from './photo.svg';
import Navbar from './components/Navbar.js';
import Output from './components/Output.js';
import Info from './components/Info.js';
import Education from './components/Education.js';
import Jobs from './components/Jobs.js';
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
        eduPoints: '',
        //id: uniqid(),
      },

      educationLst: [

      ],

      jobsObj: {
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
        jobPoints: '',

      },

      jobsLst: [],

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.handleChangeSections = this.handleChangeSections.bind(this)
    this.handleDelete = this.handleDelete.bind(this);
    this.addSection = this.addSection.bind(this);
    this.handleEditCv = this.handleEditCv.bind(this);
  }


  handleChange = (name, newVal) => {
    this.setState({[`${name}`]: newVal})
  }


  handleImg(filename){
    this.setState({img: URL.createObjectURL(filename)});
  }

  /**** Education here  ******/
  handleChangeSections = (eduId, eduClassName, eduValue, array, propName) => {
    let idx = eduId;
    let idxRep = Number(idx.replace(/\D+/g, ''));
    let newObj = array[idxRep];
    newObj[`${eduClassName}`] = eduValue
    let newLst = [...array];
    newLst[idxRep] = newObj;
    this.setState({
      [`${propName}`]: newLst
    })

  }

  handleDelete(deleteIdx){
    let idxRep = Number(deleteIdx.replace(/\D+/g, ''));
    let newLst = [...this.state.educationLst];
    newLst.splice(idxRep, 1);
    this.setState({
      educationLst: newLst
    })
    
  }




  addSection = (event, object, array) => {
    let newIdObj = this.state[`${object}`];
    newIdObj['id'] = uniqid();
    this.setState({
      [`${object}`]: {
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
        id: uniqid(),
      },
      [`${array}`]: [...this.state[`${array}`], this.state[`${object}`]],
    })
    event.preventDefault();
  }





  handleSubmit(event){
    this.setState({output: true});
    event.preventDefault();
  }

  handleEditCv(event){
    this.setState({output: false})
  }





  render() {

    let varOut = '';
    if(!this.state.output){
      varOut =  <form  className='personal-info js-personal-info' onSubmit={evt => this.handleSubmit(evt)} >
                    <h3>Personal Information</h3>
                    <Info fname={this.state.fname} lname={this.state.lname} title={this.state.title} 
                          houseNo={this.state.houseNo}
                          streetName={this.state.streetName} 
                          postCode={this.state.postCode}
                          county={this.state.county} 
                          country={this.state.country} 
                          personalStat = {this.state.personalStat} 
                          onChange={this.handleChange}
                          onChangeImg = {this.handleImg} />
                    <h3>Education</h3>
                    <Education educationLst = {this.state.educationLst} onChange={this.handleChangeSections} 
                                onClick={this.handleDelete}/>
                    <input type="button" value="Add Education" className="add-education" onClick={e => this.addSection(e,"eduObj", "educationLst" )}/>
                    <h3>Experience</h3>
                    <Jobs jobsLst = {this.state.jobsLst} onChange={this.handleChangeSections} 
                                onClick={this.handleDelete}/>
                    <input type="button" value="Add Experience" className="add-experience" onClick={e => this.addSection(e,"jobsObj", "jobsLst" )}/>

                    <input className="submit" type="submit" value="Submit" />
                </form>
                
    }
    else if(this.state.output){
      varOut =<div className="output"> 
              <Output title={this.state.title} fname={this.state.fname} 
                        lname={this.state.lname} 
                        img={this.state.img} 
                        houseNo={this.state.houseNo}
                        streetName={this.state.streetName} 
                        postCode={this.state.postCode}
                        county={this.state.county} 
                        country={this.state.country} 
                        personalStat = {this.state.personalStat} 
                        educationItems = {this.state.educationLst} 
                        jobsLst={this.state.jobsLst}
                              />;
                    <div className="edit-cv-div js-edit-cv-div">
                        <input className="edit-cv" type="button" value="Edit CV" onClick={this.handleEditCv}/>
                    </div>
              </div>
    }

    return (
      <div className="App">
        <Navbar/>
        {varOut};
      </div>
      
    )
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