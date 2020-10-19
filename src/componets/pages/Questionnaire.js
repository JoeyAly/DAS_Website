import React, { Component} from 'react';
import '../../App.css';
import  { UserForm} from '../../componets/Form/UserForm';


class Questionnaire extends Component{
  render() {
    return (
      <div className="Questionnaire">
        <UserForm />
      </div>
    );
    }
  }

export default  Questionnaire
