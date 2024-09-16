import { styled } from '../../../stitches.config'

export const LoginImage = styled('div', {
  width: '40%',
  height: 'calc(100vh - 32px)',
  borderRadius: '$md',
  background: 'url(/images/login-bg.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const LoginFormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60%',
})

export const LoginForm = styled('div', {
  width: '372px',
})

export const LoginTitle = styled('div', {})

export const LoginButtons = styled('div', {
  marginTop: '$8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  a: {
    all: 'unset',
  },
})

export const Button = styled('div', {
  background: '$gray700',
  borderRadius: '$md',
  padding: '$6',
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  cursor: 'pointer',
  span: {
    fontWeight: '$bold',
  },
})
