//Calender.jsx//


import React, {useEffect} from'react';
import {useNavigate} from "react-router-dom";
import { StyledCalender, Sbutton, Sdiv } from './CalenderCss';

 
function CalendarPage (){
    
    const navigate = useNavigate();
  
    useEffect(() => {
        navigate('/home');
    }, [navigate])

    
    return (
      <>
      <StyledCalender  locale='ja' value={new Date()} format={(locale, date) => (date, 'd')}/>
        <Sdiv>
          <Sbutton hoverBgColor="#4bd9d9">前日</Sbutton>
          <Sbutton hoverBgColor="#ed5353">今日</Sbutton>
          <Sbutton hoverBgColor="#c6da12">翌日</Sbutton>
        </Sdiv>
      </>  
    );
  }

 
export default CalendarPage;


