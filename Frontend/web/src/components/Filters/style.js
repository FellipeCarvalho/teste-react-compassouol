import styled from  'styled-components'

export const Container = styled.div`
    width: 100%;  
    font-family: 'Playfair Display', serif;
    border-bottom: ${props => props.active ? '#797979' : '#FFF' } solid 3px;
    display: flex;
    justify-content:space-around;




    &:hover{
        cursor: pointer;
    }

`

