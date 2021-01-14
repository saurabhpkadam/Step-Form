import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem'

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem
                primaryText="First Name"
                secondaryText={firstName}
              />
              <ListItem
                primaryText="Last Name"
                secondaryText={lastName}
              />
              <ListItem
                primaryText="Email"
                secondaryText={email}
              />
              <ListItem
                primaryText="Occupation"
                secondaryText={occupation}
              />
              <ListItem
                primaryText="City"
                secondaryText={city}
              />
              <ListItem
                primaryText="Bio"
                secondaryText={bio}
              />
            </List>
            <br />

            <RaisedButton
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</RaisedButton>

            <RaisedButton
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</RaisedButton>
          </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;

