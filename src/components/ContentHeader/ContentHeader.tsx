import React from 'react'
import * as S from './styles'

const ContentHeader: React.FC = () => {
  return (
    <S.ContentHeaderWrapper>
      <S.Title>Dashboard</S.Title>
      <S.ControllersWrapper>
        <button type="button">Button</button>
        <button type="button">Button</button>
      </S.ControllersWrapper>
    </S.ContentHeaderWrapper>
  )
}

export default ContentHeader
