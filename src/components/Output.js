import React, {Component} from 'react';

class Output extends Component {
    constructor(props){
        super(props);

    }


    render(){
        return(
            <div className="main-output">
                <div className="top-bar">
                    <div className="fullName">
                        <h3>{this.props.title} {this.props.fname} {this.props.lname}</h3>
                    </div>
                    <div className="image">
                            <img className="face-image" src={this.props.img} alt="my face"/>
                    </div>
                </div>
                <h4>Address and Contact</h4>
                <div className="top-info">
                    <div className="address">
                        <p>{this.props.houseNo} {this.props.streetName} <br/> 
                            {this.props.postCode} <br/>  
                            {this.props.county} <br/>
                            {this.props.country} 
                        </p>
                        <br/>
                    </div>
                    <div className="personalStat">
                        <p>
                            {this.props.personalStat}
                        </p>
                        <hr/>
                    </div>

                </div>
                    <h4>Education</h4>
                    {this.props.educationItems.map((item)=> {
                        return(
                            <div className="edu-div" key={item.id.toString()}>
                                <div className="edu-info">
                                    <p>{item.university}<br/> 
                                    {item.city}<br/> 
                                    {item.subject} {item.degree}<br/>
                                    {item.from} {item.to}<br/>
                                    </p><br/> 
                                </div>
                                <div className="edu-text">
                                    <p>{item.eduPoints}</p>
                                    <hr/>
                                </div>
                                
                            </div>
                        )
                    })}

                    <h4>Experience</h4>
                    {this.props.jobsLst.map((item)=> {
                        return(
                            <div className="edu-div" key={item.id.toString()}>
                                <div className="edu-info">
                                    <p>{item.position}<br/> 
                                    {item.company}<br/> 
                                    {item.city}<br/>
                                    {item.from} {item.to}<br/>
                                    </p><br/> 
                                </div>
                                <div className="edu-text">
                                    <p>{item.jobPoints}</p>
                                    <hr/>
                                </div>
                                
                            </div>
                        )
                    })}
            
                
                
            </div>
        )
    }
}

export default Output;