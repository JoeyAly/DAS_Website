import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  mainForm = e => {
    e.preventDefault();
    this.props.firstStep();
  };

  render() {
   
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <div class="center">
                <AppBar title="Success!" />
                    <h1>Your Form Has Been Submitted!</h1>
                <br />
                <RaisedButton
                    label= "Submit New Form"
                    primary= {false}
                    style={styles.button}
                    onClick={this.mainForm}
            />
            </div>
          </React.Fragment>
          
      </MuiThemeProvider>
    );
  }
}
const styles ={
    button: {
        margin: 10,
    }

}

export default Success;