import { styled } from '../../../../stitches.config'

export const Show = styled('div', {
  variants: {
    visible: {
      true: { display: 'block' },
      false: { display: 'none' },
    },
  },
})

export const NewReviewContainer = styled('div', {
  background: '$gray700',
  padding: '$5',
  borderRadius: '$md',
  marginBottom: '$4',

  svg: {
    color: '$purple100',
  },

  textarea: {
    color: '$white',
    border: 0,
    background: '$gray800',
    padding: '$4',

    boxSizing: 'border-box',
    fontSize: '$sm',
    fontFamily: '$default',
    resize: 'none',
    width: '100%',

    '&:focus': {
      outline: '1px solid $gray500',
    },
  },
})

export const NewReviewHeader = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  marginBottom: '$4',
  h1: {
    fontSize: '$md',
  },
})
export const NewReviewStars = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

export const NewReviewUserInfo = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',
})

export const NewReviewButtons = styled('div', {
  display: 'flex',
  justifyContent: 'end',
  marginTop: '$2',
  gap: '$2',
  '>button': {
    all: 'unset',
    cursor: 'pointer',
    background: '$gray600',
    padding: '$2',
    borderRadius: '$sm',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    '&:disabled': {
      cursor: 'not-allowed',
      background: 'gray',
    },
  },
})

export const Error = styled('p', {
  color: 'red',
  fontSize: '$sm',
})
