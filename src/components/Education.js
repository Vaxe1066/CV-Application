import React, {Component} from 'react';
import uniqid from "uniqid";

class Education extends Component {
    constructor(props){
        super(props);

        this.handleChangeSections = this.handleChangeSections.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChangeSections = (event) => {
        this.props.onChange( event.target.id, event.target.className, event.target.value, this.props.educationLst, "educationLst");
    }

    handleDelete= (event) => {
        this.props.onClick( event.target.id);
    }



    render(){

        let myFunc = this.handleChangeSections;
        let myDelete = this.handleDelete;
        return(
            <div className="education-form js-education-form">
                {this.props.educationLst.map( (item, index) => {
                    return (

                        <div className="indi-edu-form js-indi-edu-form" key={item.id.toString()}>
                            <input className='university' id={`i_${index}`} placeholder='University/College' type="text"
                            value={item.university} onChange={myFunc} />
                            <input className='city' id={`i_${index}`} placeholder='City' type="text" 
                                    value={item.city} onChange={myFunc}/>
                            <input className='degree' id={`i_${index}`} placeholder='Degree' type="text" 
                                    value={item.degree} onChange={myFunc}/>
                            <input className='subject' id={`i_${index}`} placeholder='Subject' type="text" 
                                    value={item.subject} onChange={myFunc}/>
                            <input className='from' id={`i_${index}`} placeholder='From' type="text" 
                                    value={item.from} onChange={myFunc}/>
                            <input className='to' id={`i_${index}`} placeholder='To' type="text" 
                                    value={item.to} onChange={myFunc}/>
                            <input className="delete" id={`i_${index}`} type="button" value="Delete" onClick={myDelete}/>

                        </div>
                    )
                })}
            </div>
            
            
            
            );
    }
}

export default Education;