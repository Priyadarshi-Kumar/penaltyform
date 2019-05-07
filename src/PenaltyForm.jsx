import React, { Component } from "react";
import MuiPhoneNumber from "material-ui-phone-number";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import PenaltyDetails from "./PenaltyDetails"

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    textAlign: "center"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 70,
    height: 70
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});
class PenaltyForm extends Component {
  state = {};
  handleOnChange = value => {
    this.setState({
      phone: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.phone);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <form onSubmit={this.handleSubmit}>
            <MuiPhoneNumber
              required
              defaultCountry={"in"}
              onChange={this.handleOnChange}
              onlyCountries={["in"]}
            />
            <Button
              type="submit"
              style={{
                height: "36px",
                width: "auto",
                borderRadius: "8px",
                background: "#42c7f4",
                color: "white",
                fontWeight: "bold",
                marginLeft: "4px"
              }}
            >
              Submit
            </Button>
          </form>
        </Paper>
        <PenaltyDetails />
      </div>
    );
  }
}

export default withStyles(styles)(PenaltyForm);
