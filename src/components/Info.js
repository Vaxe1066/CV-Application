import React, {Component} from 'react';

class Info extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleImg = this.handleImg.bind(this);
    }


    handleChange = (event) => {
        this.props.onChange(event.target.id, event.target.value);
    }

    handleImg = (event) =>{
        this.props.onChangeImg(event.target.files[0])
    }

    render() {
        //const {items} = this.props;
        
        let myFunc = this.handleChange;
        let imgFunc = this.handleImg;
        return (
            <div className="main-form js-main-form">
                {/*<form  className='personal-info js-personal-info' onSubmit={evt => this.handleSubmit(evt)} >*/}
                    <h3>Personal Information</h3>
                    <input id="title" placeholder='Title' type="text" value={this.props.title} onChange={myFunc}/>
                    <input id="fname" placeholder='First Name' type="text" value={this.props.fname} onChange={myFunc}></input>
                    <input id="lname" placeholder='Last Name' type="text" value={this.props.lname} onChange={myFunc}/>
                    <input id="houseNo" placeholder='House Number' type="text" value={this.props.houseNo} onChange={myFunc}/>
                    <input id="streetName" placeholder='Street Name' type="text" value={this.props.streetName} onChange={myFunc}/>
                    <input id="postCode" placeholder='ZIP/Post Code' type="text" value={this.props.postCode} onChange={myFunc}/>
                    <input id="county" placeholder='County/State' type="text" value={this.props.county} onChange={myFunc}/>
                    <input id="country" placeholder='Country' type="text" value={this.props.country} onChange={myFunc}/>
                    <textarea id='personalStat' placeholder ='Say Something About Yourself...' type='text' value={this.props.personalStat} onChange={myFunc}   maxLength='500' />
                    <label htmlFor="img">Upload Cover Photo:</label>
                    <input type="file" id="img" name="img" accept="image/*" onChange={imgFunc} />
                    <input type="submit" value="Submit" />
                {/*</form>*/}
            </div>
        );
    }
}

export default Info;