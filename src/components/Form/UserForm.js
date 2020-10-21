import React, { Component} from 'react';
import FormUserDetails from './FormUserDetails';
import Confirm from './Confirm';
import Success from './Success';


export class UserForm extends Component {
    state = {
      step: 1,
      activityDate: '',
      hoursCompleted: '',
      hoursType: '',
      learned: '',
      activity: '',
    
    };
  
    // Proceed to next step
    nextStep = () => {
      const { step } = this.state;
      this.setState({
        step: step + 1
      });
    };

    prevStep = () => {
      const { step } = this.state;
      this.setState({
        step: step - 1
      });
    };

    firstStep = () => {
      const { step } = this.state;
      this.setState({
        step: step - 2
      });
    };

  
    // Handle fields change
    handleChange = input => e => {
      this.setState({ [input]: e.target.value });
    };
  
    render() {
      const { step } = this.state;
      const { activityDate, hoursCompleted, hoursType, learned, activity } = this.state;
      const values = { activityDate, hoursCompleted, hoursType, learned, activity };
  
      switch (step) {
        case 1:
          return (
            <FormUserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          );

          case 2:
          return (
            <Confirm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
          );
        
        case 3:
          return (
            <Success 
              firstStep={this.firstStep}
            />
          
          );
          }
    }
  }
  
  export default UserForm;