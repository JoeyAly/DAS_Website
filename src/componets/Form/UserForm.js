import React, { Component} from 'react';
import FormUserDetails from './FormUserDetails';
import Confirm from './Confirm';

export class UserForm extends Component {
    state = {
      step: 1,
      activityDate: '',
      hoursCompleted: '',
      hoursType: '',
      email: '',
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

  
    // Handle fields change
    handleChange = input => e => {
      this.setState({ [input]: e.target.value });
    };
  
    render() {
      const { step } = this.state;
      const { activityDate, hoursCompleted, hoursType, email, activity } = this.state;
      const values = { activityDate, hoursCompleted, hoursType, email, activity };
  
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
          return <h1> Confirm</h1>;
          
        
            
        default:
          (console.log('This is a multi-step form built with React.'))
      }
    }
  }
  
  export default UserForm;