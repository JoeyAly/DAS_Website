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
                        hintText= "Enter Your First Name"
                        floatingLabelText= "First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                        alignText= "Center"
                        
                        
                        
                    
                />
                <br/>
                <TextField
                    hintText="Enter Last Name"
                    floatingLabelText= "Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                />
                <br/>
                <TextField
                    hintText="Enter Email"
                    floatingLabelText= "Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                />
                <br/>
                <RaisedButton
                    label="Continue"
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
    }

}




export default FormUserDetails;
