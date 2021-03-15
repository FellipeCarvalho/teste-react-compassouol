import styled from  'styled-components'

export const Container = styled.div`

    width:100vw;
    height:100vh;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 2000;
    display: ${props => props.showModal ? "flex" : "none"} ;
    justify-content:center;
    align-items:center; 

`

export const Conteudo = styled.div`
    width:60vw;
    height:50vh;
    background-color: #FFF;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    box-shadow: 0px 0px 30px -17px #707070; 
    border-radius: 15px;
    padding:10px;



    h1{
        display:flex;
        align-items: center;
        justify-content:center;

    }

    scroll-padding-block{
        padding-top:20px;

    }
    
`