//CalenderCss.jsx//

import Calendar from "react-calendar";
import styled from "styled-components";

export const StyledCalender = styled(Calendar)`
width: 30%;
max-width: 500px;
transform: translateY(100px);
text-align: center;

.react-calendar__month-view__days__day--weekend:nth-child(7n-1){
    color: blue;
}

.react-calendar__month-view__days__day--weekend:nth-child(7n){
    color: red;
}

`



