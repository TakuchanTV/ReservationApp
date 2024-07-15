import styled from "styled-components";

export const ReservationTable = () => {
    return(
      <>
      <STablediv>
      <SContainer>
        <table >
          <tr>
            {Array.from({ length: 24 }, (_, index) => (
              <Sth key={index}>{index}</Sth>
            ))}
          </tr>

        </table>
      </SContainer>
      </STablediv>
      </>  
    )
}

const SContainer = styled.div`
position: absolute;
left: 250px;
margin: 4px;
`
const STablediv = styled.div`
  position: relative;
`
const Sth = styled.th`
  /* color: yellow; */
  /* background-color: purple; */
  padding: 15px;
  transform: translateY(-650px);
  
`

