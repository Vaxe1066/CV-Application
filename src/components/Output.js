import React, {Component} from 'react';

class Output extends Component {
    constructor(props){
        super(props);

    }


    render(){
        return(
            <div className="main-output js-main-output">
                <h3>{this.props.fname} {this.props.lname}</h3>
                <img src={this.props.img} alt="my face"/>
            </div>
        );
    }
}

export default Output;