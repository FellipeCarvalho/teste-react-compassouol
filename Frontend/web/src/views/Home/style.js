
import styled from  'styled-components'

export const Container = styled.div`
    width:100%;
`


export const FilterAreaTop = styled.div `
    width:100%;
    display: flex; 
    align-content:right;
    justify-content:space-around; 
    border-top:#707070 solid 3px;

    button{
        
        border: none;
        background: none;
        outline:none;
    }

`
export const FilterArea = styled.div `
    display: flex; 
    justify-content:space-around; 
    margin-top:30px; 

    button{
        border: none;
        background: none;
        outline:none;
    }

`

export const Content = styled.div`
    width:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top:20px;
    padding-bottom:70px;

    button{
        border: none;
        background: none;
        outline:none
    }

`


export const Title = styled.div`
    width:100%;
    border-bottom: 1px solid #564000;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom:18px;

h3{
    
    color:#907B8E;
    position: relative;
    top:25px;
    background-color: #FFF;
    padding: 0 20px;

}
`

export const CloseModal  = styled.button `
    border: none;
    outline:none;
    background: none;
`