import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
       
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter Your Occupation"
              label="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
              
            />
            <br />
            <TextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
             
            />
            <br />
            <TextField
              placeholder="Enter Your Bio"
              label="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
            
            />
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
            >Continue</RaisedButton>
         
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;