import { styled } from '../../../../stitches.config'

export const YourLastReadContainer = styled('div', {
  marginBottom: '$4',
  span: {
    fontSize: '$sm',
  },
  '>span': {
    display: 'block',
    marginBottom: '$4',
  },
})

export const YourLastReadHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$2',

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

export const YourLastReadBox = styled('div', {
  background: '$gray600',

  padding: '$6',
  borderRadius: '$md',
  display: 'flex',
  gap: '$4',
  cursor: 'pointer',

  '&:hover': {
    outline: '2px solid $gray500',
  },
  '@bp1': {
    backgoundColor: 'red',
  },
})

export const YourLastReadContent = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
})

export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  span: {
    color: '$gray300',
  },
})

export const Title = styled('div', {
  h1: {
    fontSize: '$lg',
  },
  span: {
    color: '$gray400',
  },
})

export const Text = styled('p', {
  marginTop: 'auto',
  fontSize: '$sm',
  color: '$gray300',
})

export const StarsContainer = styled('div', {})
