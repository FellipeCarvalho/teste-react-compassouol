
import React, {useMemo} from 'react'
import {format} from 'date-fns'
import * as S from './style'


function NewsCard({ id, title, abstract, url, when }) {
  const day = useMemo(() => format(new Date(when), 'd') );
  const date = useMemo(() => format(new Date(when), 'MMMM') );
  const hour = useMemo(() => format(new Date(when), 'HH:mm') );
  
  return (
    <S.Container id= {id}>
      <S.TopCard>
          <h3>{title}</h3>
      </S.TopCard>

      <S.BottomCard>
          <strong>{day} {date}</strong>
          <span>{hour}</span>
      </S.BottomCard>
    </S.Container>
  )
}

export default NewsCard;
