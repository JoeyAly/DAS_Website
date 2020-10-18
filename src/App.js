import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Navbar} from './componets';
import './App.css';
import Home from './componets/pages/Home'
import Questionnaire from './componets/pages/Questionnaire'
import HoursCompleted from './componets/pages/HoursCompleted';
import SignUp from './componets/pages/SignUp';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/questionnaire' component={Questionnaire}/>
        <Route path='/hoursCompleted' component={HoursCompleted}/>
        <Route path='/signUp' component={SignUp}/>
      </Switch>
      
    </Router>
  );
}

export default App;
