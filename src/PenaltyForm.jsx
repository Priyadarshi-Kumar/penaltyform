import React, { Component } from "react";
import MuiPhoneNumber from "material-ui-phone-number";

class PenaltyForm extends Component {
  state = {};
  handleOnChange = value => {
    this.setState({
      phone: value
    });
  };
  handleSubmit = () => {

  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <MuiPhoneNumber
            required={true}
            fullWidth={true}
            defaultCountry={"in"}
            onChange={this.handleOnChange}
            onlyCountries={["in"]}
          />
        </form>
      </div>
    );
  }
}

export default PenaltyForm;
