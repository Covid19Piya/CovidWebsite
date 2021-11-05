import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'

import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/post_patient/Detailpost_patient'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/post_patient/Creatpost_patient'
import Createpost_volunteer from './components/post_volunteer/Createpost_volunteer';
import test from './components/test'
import test2 from './components/test2'
import test3 from './components/test3'
import posthelp from './components/posthelp';
import seepatient from './components/seepost_patient';
import loginp from './components/auth/loginp'
import test4 from './components/test4';
import Home from './components/home'
import VolunteerChat from './components/VolunteerChat'
import PatientChat from './components/PatientChat'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            <Route path='/test' component={test} />
            <Route path='/test2' component={test2} />
            <Route path='/test3' component={test3} />
            <Route path='/test4' component={test4} />
            <Route path='/posthelp' component={posthelp} />
            <Route path='/seepatient' component={seepatient} />
            <Route path='/loginp' component={loginp} />
            <Route path='/VolunteerChat' component={VolunteerChat} />
            <Route path='/create_volunteer' component={Createpost_volunteer} />
            <Route path='/PatientChat' component={PatientChat} />

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
