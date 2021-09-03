import React, {Component} from 'react';

class Output extends Component {
    constructor(props){
        super(props);

    }


    render(){
        return(
            <div className="main-output js-main-output">
                <div className="fullName">
                <h3>{this.props.title} {this.props.fname} {this.props.lname}</h3>
                </div>
                <div className="address">
                    <h4>Address and Contact</h4>
                    <p>{this.props.houseNo} {this.props.streetName} <br/> 
                        {this.props.postCode} <br/> 
                        {this.props.postCode} <br/> 
                        {this.props.county} <br/>
                        {this.props.country} 
                    </p>

                </div>
                
                <img src={this.props.img} alt="my face"/>
            </div>
        );
    }
}

export default Output;