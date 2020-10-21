import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Navbar} from './components';

import Home from './pages/HomePage/Home'
import HoursCompleted from './pages/HoursCompletedPage/HoursCompleted';
import SignUp from './pages/SignUpPage/SignUp';
import UserForms from './pages/UserFormsPage/UserForms';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/userForms' component={UserForms}/>
        <Route path='/hoursCompleted' component={HoursCompleted}/>
        <Route path='/signUp' component={SignUp}/>
      </Switch>
      
    </Router>
  );
}

export default App;
