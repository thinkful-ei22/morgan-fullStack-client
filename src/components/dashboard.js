import '../stylesheets/dashboard.css';

import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom';

import {setWorkoutError} from '../actions/workoutsDelete';

import Workouts from './workout-list/workouts';
import DataAnalysis from './data-analysis/dataAnalysis';
import Profile from './user-preferences/profile';
import SetPreferences from './user-preferences/setPreferences';
import SetEmail from './user-preferences/setEmail';
import SetUsername from './user-preferences/setUsername';
import SetPassword from './user-preferences/setPassword';
import ConfirmLogout from './user-preferences/confirmLogout';

export default function Dashboard(props){
  if (props.currentUser.preferences.length === 0) {
    return (
      <Router>
        <div className='landing-page'>
          <SetPreferences />
        </div>
      </Router>
    )
  } else {
    let errorMessage;
    if(props.workoutError){
      errorMessage = (
      <div className='error-message dashboard'>
        <p>{props.workoutError}</p>
        <button type='button' onClick={e => props.dispatch(setWorkoutError(null))}>Ok</button>
      </div>
    )}

    return (
      <Router>
        <div>
          <nav>
            <div className='nav-link-container'>
              <NavLink to='/workouts' className='navbar-link workouts' activeClassName='selectedNav'>Workout-Logs</NavLink>
              <NavLink to='/analysis' className='navbar-link data-analysis' activeClassName='selectedNav'>Data-Analysis</NavLink>
              <NavLink to='/profile' className='navbar-link profile' activeClassName='selectedNav'>Profile</NavLink>
            </div>
          </nav>

          {errorMessage}

          <div className='dashboard-content'>
            <Switch>
              <Route exact path='/workouts' component={Workouts}/>
              <Route exact path='/analysis' component={DataAnalysis}/>
              <Route exact path='/profile' component={Profile}/>
              <Route exact path='/profile/preferences' component={SetPreferences} />
              <Route exact path='/profile/email' component={SetEmail} />
              <Route exact path='/profile/username' component={SetUsername} />
              <Route exact path='/profile/password' component={SetPassword} />
              <Route exact path='/profile/logout' component={ConfirmLogout} />
              <Redirect from='/' to='/workouts'/>
            </Switch>
          </div>

        </div>
      </Router>
    )
  }
}