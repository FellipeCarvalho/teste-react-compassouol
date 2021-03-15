
import React, {useMemo} from 'react'
import * as S from './style'

function Modal({ showModal, title, news }) {
    return (
          <S.Container showModal={showModal}>
              <S.Conteudo>
              <h1>{news.title}</h1>
              <p>{news.abstract}</p>
              <span>Continue reading: <a href={news.url}> here </a> </span>
              

              </S.Conteudo>
          </S.Container>

          ) 
}

export default Modal