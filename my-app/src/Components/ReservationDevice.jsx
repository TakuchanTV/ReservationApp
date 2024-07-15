//ReservationDevice.jsx//
import styled from "styled-components"
import { ReservationTable } from "./ReservationTable"
export const ReservationList = () => {
   return(
    <>
     <SContainer>
       <table border={1} >
        
          <tr><td><p>ドラフター内オーブン(左)</p></td></tr>
          <tr><td><p>ドラフター内オーブン(右)</p></td></tr>
          <tr><td><p>真空乾燥機(左)</p></td></tr>
          <tr><td><p>真空乾燥機(中)</p></td></tr>
          <tr><td><p>真空乾燥機(右)</p></td></tr>
          <tr><td><p>ホットプレス</p></td></tr>
          <tr><td><p>UV照射器</p></td></tr>
          <tr><td><p>オートグラフ</p></td></tr>
          <tr><td><p>TGA</p></td></tr>
          <tr><td><p>DTA</p></td></tr>
          <tr><td><p>DSC-60</p></td></tr>
          <tr><td><p>DMA</p></td></tr>
          <tr><td><p>ホットスターラー(熱電対)</p></td></tr>
          <tr><td><p>ホットスターラー</p></td></tr>
       
       </table>
       <ReservationTable />
     </SContainer>    
    </>
   ) 
}

  const SContainer  = styled.div`
    transform: translateX(200px) translateY(-180px);
    margin: 0px;
`
