import React from 'react';
import LoginScreen from './loginScreen';
import Dashboard from './dashboard';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit'
import { getWorkouts } from '../actions/workouts';

class App extends React.Component {
  componentWillMount(){
    if(localStorage.getItem('authToken') ){
      this.props.dispatch(getWorkouts());
    }
  }

  render(props){
    let mainContent;

    if(this.props.loading === true){
      mainContent = <Spinner name='wordpress' fadeIn='none' />

    } else if (!this.props.currentUser){
      mainContent = <LoginScreen registerError={this.props.registerError} loginError={this.props.loginError}/>

    } else {
      mainContent = <Dashboard currentUser={this.props.currentUser}/>
    }
    
    return (
      <div>
        <header role='banner'>
          <h1>Workout The Data</h1>
        </header>

        <main role='main'>
          {mainContent}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    currentUser: state.auth.currentUser,
    registerError: state.auth.registerError,
    loginError: state.auth.loginError
  }
}

export default connect(mapStateToProps)(App);