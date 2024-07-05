//Calender.jsx//


import React, {useEffect} from'react';
import {useNavigate} from "react-router-dom";
import { StyledCalender } from './CalenderCss';
import {format} from 'date-fns'

 
function CalendarPage (){
    const navigate = useNavigate();
  
    useEffect(() => {
        navigate('/home');
    }, [navigate])

    

    return (
      <StyledCalender calendarType='US' locale='ja' value={new Date()} format={(locale, date) => (date, 'd')}/>
    );
  }

 
export default CalendarPage;


