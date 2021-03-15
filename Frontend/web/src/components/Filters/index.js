import React from 'react';
import * as S from './style'

function Filters({ title, active }) {
    return (
          <S.Container active ={ active } >
              <span>{ title }</span>
          </S.Container>
          )
}
export default Filters;
