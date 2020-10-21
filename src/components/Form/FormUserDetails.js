import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../../App.css';




export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      
    };

    
    render() {
        const { values, handleChange} =this.props;
        

        return (
            
            <MuiThemeProvider> 
                
                <React.Fragment>
                <div class="titleCenter">
                    <AppBar

                        title= "Enter User Details " 
                        
                     
                    />
                    </div>
                    <div class="center">
                    <TextField 
                        hintText= "Enter The Date of Activity (mm/dd/yyyy) "
                        floatingLabelText= "Date"
                        onChange={handleChange('activityDate')}
                        defaultValue={values.activityDate}
                     
                        
                    
                />
                <br/>
                <TextField
                    hintText="Enter Hours Completed"
                    floatingLabelText= "Hours Completed"
                    onChange={handleChange('hoursCompleted')}
                    defaultValue={values.hoursCompleted}
                />
                <br/>
                <TextField
                    hintText="Choose the Type of Hour"
                    floatingLabelText= "Hours Type"
                    onChange={handleChange('hoursType')}
                    defaultValue={values.hoursType}
                />
                <br/>
                <TextField
                    hintText="Describe What You've Learned"
                    floatingLabelText= "Lessons Learned"
                    onChange={handleChange('learned')}
                    defaultValue={values.learned}
                />
                <br/>
                <TextField
                    hintText="Describe Your Activity"
                    floatingLabelText= "Activity"
                    onChange={handleChange('activity')}
                    defaultValue={values.activity}
                />
                <br/>
                <RaisedButton 
                    label="Submit"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                    
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
        background: '#132c6b'
    }

}




export default FormUserDetails;
