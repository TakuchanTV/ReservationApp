import React, {useEffect} from'react';
import Calendar from 'react-calendar';
import {useNavigate} from "react-router-dom";

 
function CalendarPage (){
    const navigate = useNavigate();
  
    useEffect(() => {
        navigate('/home');
    }, [navigate])

    

    return (
      <Calendar locale="ja-JP"  value={new Date()} />
    );
  }

 
export default CalendarPage;

