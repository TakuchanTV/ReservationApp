//ReservationDevice.jsx//
import styled from "styled-components"
import { ReservationTable } from "./ReservationTable"
export const ReservationList = () => {
   return(
    <>
     <SContainer>
       <p>ドラフター内オーブン(左)</p>
       <p>ドラフター内オーブン(右)</p>
       <p>真空乾燥機(左)</p>
       <p>真空乾燥機(中)</p>
       <p>真空乾燥機(右)</p>
       <p>ホットプレス</p>
       <p>UV照射器</p>
       <p>オートグラフ</p>
       <p>TGA</p>
       <p>DTA</p>
       <p>DSC-60</p>
       <p>DMA</p>
       <p>ホットスターラー(熱電対)</p>
       <p>ホットスターラー</p>
       <ReservationTable />
     </SContainer>    
    </>
   ) 
}

  const SContainer  = styled.div`
    transform: translateX(200px) translateY(-100px);
    margin: 0px;
`
