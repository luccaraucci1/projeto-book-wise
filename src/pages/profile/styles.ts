import { styled } from '../../../stitches.config'

export const MyBooks = styled('div', {
  width: '100%',
  span: {
    fontSize: '$sm',
  },
})

export const InputContainer = styled('div', {
  border: '1px solid $gray500',
  borderRadius: '$sm',
  padding: '$3',
  fontSize: '$sm',
  color: '$gray500',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  input: {
    all: 'unset',
    width: 'inherit',
    color: '$white',
  },
  svg: {
    marginLeft: 'auto',
  },
})

export const BookContainer = styled('div', {
  marginTop: '$6',
  width: '100%',

  '>p': {
    marginBottom: '$2',
  },
})

export const BookBox = styled('div', {
  background: '$gray700',
  borderRadius: '$md',
  padding: '$8',
})

export const BookHeader = styled('div', {
  display: 'flex',
  gap: '$4',
  marginBottom: '$4',
  h1: {
    fontSize: '$lg',
  },

  span: {
    color: '$gray400',
  },

  svg: {
    color: '$purple100',
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const BookContent = styled('div', {
  fontSize: '$md',
  marginTop: '$8',
})

export const StarsContainer = styled('div', {
  marginTop: 'auto',
})
