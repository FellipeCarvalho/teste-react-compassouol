import React from 'react';
import * as S from './style';
import logouol  from '../../assets/logouol.svg';


function Header() {
  return (
        <S.Container>
            <strong> NEWSNOPAPER</strong>
            <img src={ logouol}/>
        </S.Container>
        )
}

export default Header;
