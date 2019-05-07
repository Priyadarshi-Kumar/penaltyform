import React, { Component } from 'react'
import MuiPhoneNumber from "material-ui-phone-number"

class PenaltyForm extends Component {
    handleOnChange = (value) => {
        this.setState({
            phone: value
         });
    }
  render() {
    return (
      <div>
        <MuiPhoneNumber defaultCountry={'us'} onChange={this.handleOnChange}/>
      </div>
    )
  }
}

export default  PenaltyForm;