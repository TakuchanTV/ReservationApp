//CalenderCss.jsx//

import Calendar from "react-calendar";
import styled from "styled-components";

export const StyledCalender = styled(Calendar)`
width: 30%;
max-width: 500px;
transform: translateY(150px);
text-align: center;


.react-calendar__month-view__days__day--weekend:nth-child(7n-1){
    color: blue;
}

.react-calendar__month-view__days__day--weekend:nth-child(7n){
    color: red;
}


`

export const Sdiv = styled.div`
display: flex ;
justify-content: center;
align-items: flex-end;
margin-top: 20px;
margin-right: 850px;

`

export const Sbutton = styled.button`
   transform :translateY(150px) ;
   margin: 5px;
   border-radius: 16px;
   background-color: ${props => props.BgColor || 'white'};
   color: ${props => props.textColor || 'black'};
   &:hover{
    cursor: pointer;
    background-color: ${props => props.hoverBgColor || 'white'};
    color: ${props => props.hovertextColor || 'black'};
   };
`

