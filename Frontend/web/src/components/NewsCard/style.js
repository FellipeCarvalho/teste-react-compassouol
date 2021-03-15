
import styled from  'styled-components'

export const Container = styled.div`

    font-family: 'Playfair Display', serif;
    padding:10px;
    width: 300px;    
    height: 150px;
    margin: 10px;
    background-color: #FFF;
    display: flex;
    align-items: center; 
    flex-direction: column; 
    justify-content: center;
    box-shadow: 0px 0px 30px -17px #707070; 
    border-radius: 5px;

    &:Hover{
        opacity: 0.7; 
        cursor: pointer; 
        transition: all 0.3s ease; 

    }

`
export const TopCard = styled.div` 
    display: flex;
    align-items: center; 
    justify-content: center;
    flex-direction: column;
    color: #191818;
    font-size: 14px;


`
export const BottomCard = styled.div` 
    width: 100%; 
    display: flex; 
    justify-content: space-around; 
    font-size: 12px;

    strong{
        color:#191818;
        
    }

    span{
        color:#191818;

    }
`


