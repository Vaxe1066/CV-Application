import React, {Component} from 'react';

class Jobs extends Component {
    constructor(props){
        super(props);

        this.handleChangeSections = this.handleChangeSections.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChangeSections = (event) => {
        this.props.onChange( event.target.id, event.target.className, event.target.value, this.props.jobsLst, "jobsLst"  );
    }

    handleDelete= (event) => {
        this.props.onClick( event.target.id, this.props.jobsLst, "jobsLst" );
    }

    render(){
        let myFunc = this.handleChangeSections;
        let myDelete = this.handleDelete;
        return(
            <div className="jobs-form js-jobs-form">
            {this.props.jobsLst.map( (item, index) => {
                return (

                    <div className="indi-jobs-form js-indi-jobs-form" key={item.id.toString()}>
                        <input className='position' id={`i_${index}`} placeholder='Position' type="text"
                        value={item.position || ''} onChange={myFunc} />
                        <input className='company' id={`i_${index}`} placeholder='Company' type="text" 
                                value={item.company || '' } onChange={myFunc}/>
                        <input className='city' id={`i_${index}`} placeholder='City' type="text" 
                                value={item.city || '' } onChange={myFunc}/>
                        <input className='from' id={`i_${index}`} placeholder='From' type="text" 
                                value={item.from || ''} onChange={myFunc}/>
                        <input className='to' id={`i_${index}`} placeholder='To' type="text" 
                                value={item.to || '' } onChange={myFunc}/>
                        <textarea className='jobPoints' id={`i_${index}`}  placeholder ='Say Something About You Experiences...' type='text' 
                                    value={item.jobPoints || '' } onChange={myFunc}   maxLength='500' />
                        <input className="delete" id={`i_${index}`} type="button" value="Delete" onClick={myDelete}/>

                    </div>
                )
            })}
        </div>
        )
    }


}

export default Jobs;