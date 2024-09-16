import { styled } from '../../../../stitches.config'

export const ProfileContainer = styled('div', {
  height: 'fit-content',
  marginTop: '125px',
  marginRight: '70px',
  borderLeft: '1px solid $gray700',
  width: '300px',
  padding: '0 $8',

  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const UserInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  h1: {
    fontSize: '$lg',
  },
})

export const UserImage = {
  borderRadius: '100%',
}

export const ImageBorder = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '$gradient-vertical',
  borderRadius: '$full',
  padding: '2px',
  width: 'fit-content',
})

export const Info = styled('div', {
  margin: '$6 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '&::after': {
    content: '',
    margin: '$8 0',
    borderRadius: '$full',
    background: '$gradient-horizontal',
    width: '32px',
    height: '4px',
  },
})

export const ProfileItems = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$4',
})

export const Item = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',
  width: '200px',

  h1: {
    fontSize: '$md',
  },

  svg: {
    color: '$green100',
  },
})

export const ItemInfo = styled('div', {})
