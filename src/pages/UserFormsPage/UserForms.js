import React, { Component} from 'react';
import '../../App.css';
import  { UserForm} from '../../components/Form/UserForm';


class UserForms extends Component{
  render() {
    return (
      <div className="UserForms">
        
        <UserForm />
        
      </div>
    );
    }
  }

export default  UserForms
