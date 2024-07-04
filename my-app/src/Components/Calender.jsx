//Calender.jsx//


import React, {useEffect} from'react';
import {useNavigate} from "react-router-dom";
import { StyledCalender } from './CalenderCss';


 
function CalendarPage (){
    const navigate = useNavigate();
  
    useEffect(() => {
        navigate('/home');
    }, [navigate])

    

    return (
      <StyledCalender locale="ja-JP" calendarType='ISO 8601' value={new Date()} />
    );
  }

 
export default CalendarPage;


