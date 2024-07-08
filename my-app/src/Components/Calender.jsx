//Calender.jsx//


import React, {useEffect, useState} from'react';
import {useNavigate} from "react-router-dom";
import { StyledCalender, Sbutton, Sdiv } from './CalenderCss';
import { ReservationList } from './ReservationDevice';
 
function CalendarPage (){
    const [activeDate, setActiveDate] = useState(new Date());

    const navigate = useNavigate();
  
    useEffect(() => {
        navigate('/home');
    }, [navigate])
    
    const handleDayClick = (value) => {
      setActiveDate(value);
    }
  
    
    return (
      <>
      <StyledCalender  locale='ja' value={activeDate} 
      format={(locale, date) => (date, 'd')} onClickDay={handleDayClick}
      tileClassName={({ date, view }) => {
        if (view === 'month' && date.getTime() === activeDate.getTime()){
          return 'react-calendar__tile--active';
        }
      }}/>
        <Sdiv>
          <Sbutton hoverBgColor="#4bd9d9" onClick={() => alert("前日の予定を表示します")}>前日</Sbutton>
          <Sbutton hoverBgColor="#f37b7b" onClick={() => alert("今日の予定を表示します")}>今日</Sbutton>
          <Sbutton hoverBgColor="#c6da12" onClick={() => alert("翌日の予定を表示します")}>翌日</Sbutton>
          <ReservationList />
        </Sdiv>
        
      </>  
    );
  }

 
export default CalendarPage;


