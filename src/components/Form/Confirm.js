import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

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
      values: { activityDate, hoursCompleted, hoursType, learned, activity }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <div class="center">
            <AppBar title="Confirm User Data" />
            </div>
            <div class="center">
            <List>
                
              <ListItem
                primaryText ="Activity Date" secondaryText={activityDate} />
             
              <ListItem
                primaryText ="Completed Hours" secondaryText={hoursCompleted} />
              
              <ListItem
                primaryText="Type of Hours" secondaryText={hoursType} />
              
              <ListItem
                primaryText="Lessons Learned" secondaryText={learned} />
              
              <ListItem
                primaryText="Activity" secondaryText={activity} />
              
            </List>
            <br />


            <RaisedButton
                label= "Confirm & Continue"
                primary= {true}
                style={styles.button}
                onClick={this.continue}
            />
            <RaisedButton
                label= "Back"
                primary= {false}
                style={styles.button}
                onClick={this.back}
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

export default Confirm;