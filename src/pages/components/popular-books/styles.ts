import { styled } from '../../../../stitches.config'

export const PopularBooksContainer = styled('div', {
  minWidth: '300px',

  marginTop: '117px',
  marginRight: '$8',

  span: {
    fontSize: '$sm',
  },

  '@bp1': {
    minWidth: '350px',
  },
})

export const PopularBooksHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '$4',

  alignItems: 'center',

  a: {
    color: '$purple100',
    fontWeight: '$bold',
    cursor: 'pointer',
    textDecoration: 'none',
    padding: '$2',
    transition: 'background 0.2s',

    '&:hover': {
      background: '$gray900',
      borderRadius: '$sm',
    },

    span: {
      verticalAlign: 'middle',
    },
    svg: {
      verticalAlign: 'middle',
    },
  },
})

export const BookList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const BookBox = styled('div', {
  background: '$gray700',
  display: 'flex',
  padding: '$4',
  borderRadius: '$md',
  gap: '$4',
  cursor: 'pointer',

  '&:hover': {
    outline: '2px solid $gray600',
  },

  h1: {
    fontSize: '$md',
  },

  span: {
    fontSize: '0.75rem',
    color: '$gray400',
  },
})

export const ImageContainer = styled('div', {
  borderRadius: '$md',
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const StarsContainer = styled('div', {
  marginTop: 'auto',
  padding: '$2 0',
  svg: {
    color: '$purple100',
  },
})
