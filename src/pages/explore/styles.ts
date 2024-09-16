import { styled } from '../../../stitches.config'

export const Overlay = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'block',
  zIndex: 1,
})

export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  lineHeight: '$tall',
  gap: '$2',
  marginBottom: '$12',
  maxWidth: 'calc(20rem * 4)',

  h1: {
    fontSize: '24px',
  },
  svg: {
    color: '$green100',
  },
})

export const InputContainer = styled('div', {
  border: '1px solid $gray500',
  borderRadius: '$sm',

  padding: '$2 $4',
  fontSize: '$sm',
  color: '$gray500',
  display: 'flex',
  alignItems: 'center',
  width: '430px',
  marginLeft: 'auto',
  input: {
    all: 'unset',
    width: 'inherit',
    color: '$white',
  },
  svg: {
    marginLeft: 'auto',
    color: '$gray500',
  },
})

export const ExploreContainer = styled('div', {})

export const BookCategories = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$4',
})
export const CategoryItem = styled('div', {
  color: '$purple100',
  outline: '1px solid $purple100',
  borderRadius: '$full',
  padding: '$1 $3',
  fontSize: '$sm',
  cursor: 'pointer',

  variants: {
    selected: {
      true: {
        color: '$white',
        background: '$purple200',
        outline: '1px solid $purple200',
      },
    },
  },
})
export const BookList = styled('div', {
  marginTop: '$8',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$4',
})

export const BookBox = styled('div', {
  display: 'flex',
  width: '20rem',
  background: '$gray700',
  padding: '$4',
  borderRadius: '$md',
  gap: '$4',
  cursor: 'pointer',

  '&:hover': {
    outline: '2px solid $gray500',
  },

  '@bp1': {
    width: '19.5rem',
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const BookImage = {
  borderRadius: '8px',
}

export const Info = styled('div', {
  h1: {
    fontSize: '$lg',
  },

  span: {
    color: '$gray400',
    fontSize: '$sm',
  },
})

export const StarsContainer = styled('div', {
  marginTop: 'auto',
  width: '100%',

  svg: {
    color: '$purple100',
  },
})
