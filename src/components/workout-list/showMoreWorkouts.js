import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class ShowMoreWorkouts extends React.Component {
  constructor(props){
    super(props);

    let initialState = {};
    this.props.nonDisplayedDates.forEach(date => {
      initialState[date] = false;
    })

    this.state = Object.assign({}, initialState);

  }

  convertTimeStringToUnix(dateString){
    return moment(dateString, 'MMMM YYYY').format('x');
  }

  handleShowSectionClick(targetDate){
    console.log('TARGET DATE', targetDate);
    this.setState({[`${targetDate}`]: true})
  }

  handleHideSectionClick(targetDate){
    console.log('TARGET DATE', targetDate);
    this.setState({[`${targetDate}`]: false})
  }


  render(){
    function handleClick (targetDate){
      const unixTime = moment(targetDate, 'MMMM YYYY').format('x');

    }

    const showMoreLinks = Object.keys(this.state).map(date => {
      if(this.state[date] === false){
        return (
          <li className='show-more' key={Date.parse(date)}>
            <button onClick={e => this.handleShowSectionClick(date)}>
              Show {date}
            </button>
          </li>
        )
      } else {
        // filters all workouts from state to include only ones within 30 days of date on the button
        const withinThirtyDays = this.props.currentUser.workouts.filter(workout => {
          const buttonTime = this.convertTimeStringToUnix(date);
          const dataTime = Date.parse(workout.date);
          return ( dataTime >= buttonTime 
                  && dataTime - (1000 * 60 * 60 * 24 * 30) <= buttonTime )
        });

        // makes a list of all workouts within 30 days of the original button
        const showMoreList = withinThirtyDays.map(workout => {
          return (
            <li key={workout.id}>
              <Link to={`/workouts/${workout.id}`}>
                {moment(workout.date).format('MMMM Do, dddd')}
              </Link>
            </li>
          )
        });

        return (
          <div>
            <h3>
              {date}
              <button onClick={e => this.handleHideSectionClick(date)}>Hide</button>
            </h3>
            <ul>
              {showMoreList}
            </ul>
          </div>
        );
      }
    });


    return (
      <ul>
        {showMoreLinks}
      </ul>
    )
  }
}
