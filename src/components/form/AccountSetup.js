import React, { Component } from 'react'

export class AccountSetup extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5">Account Setup</h1>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" onChange={inputChange('name')} value={values.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" className="form-control" name="age" onChange={inputChange('age')} value={values.age} />
                </div>
                <div ><label htmlFor="customRadioInline1">Choose Gender:</label></div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline1" name="gender" className="custom-control-input" value="male" onChange={this.onChange} required />
                  <label className="custom-control-label" htmlFor="customRadioInline1">Male</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline2" name="gender" className="custom-control-input" value="female" onChange={this.onChange} required />
                  <label className="custom-control-label" htmlFor="customRadioInline2">Female</label>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" className="form-control" name="phone" onChange={inputChange('phone')} value={values.phone} />
                </div>

                <br />
                <div className="text-right">
                    <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                </div>
            </div>
        )
    }
}

export default AccountSetup
