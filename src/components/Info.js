import React, {Component} from 'react';

class Info extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

    }


    handleChange = (event) => {
        this.props.onChange(event.target.id, event.target.value);
    }

    render() {
        //const {items} = this.props;
        
        let myFunc = this.handleChange;
        return (
            <div className="main-form js-main-form">
                {/*<form  className='personal-info js-personal-info' onSubmit={evt => this.handleSubmit(evt)} >*/}
                    <h3>Personal Information</h3>
                    <input id="fname" placeholder='First Name' type="text" value={this.props.fname} onChange={myFunc}></input>
                    <input id="lname" placeholder='Last Name' type="text" value={this.props.lname} onChange={myFunc}/>
                    <input id="title" placeholder='Title' type="text" value={this.props.title} onChange={myFunc}/>
                    {/*<label htmlFor="img">Upload Cover Photo:</label>
                    <input type="file" id="img" name="img" accept="image/*" onChange={myFunc} />*/}
                    <input type="submit" value="Submit" />
                {/*</form>*/}
            </div>
        );
    }
}

export default Info;