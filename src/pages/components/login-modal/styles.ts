import { styled } from '../../../../stitches.config'

export const ModalContainer = styled('div', {
  background: '$gray700',
  width: '500px',
  height: '300px',

  position: 'fixed',
  top: '50%',
  left: '50%',
  marginTop: '-150px',
  marginLeft: '-250px',
  boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.1)',

  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '$md',
})

export const CloseModal = styled('div', {
  padding: '$4',
  width: '100%',
  textAlign: 'end',
  svg: {
    color: '$gray400',
    cursor: 'pointer',
  },
})

export const ModalContent = styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$4',
})

export const ModalTitle = styled('div', {
  fontSize: '$sm',
  textAlign: 'center',
})

export const Button = styled('div', {
  background: '$gray600',
  width: '300px',
  padding: '$4',
  borderRadius: '$md',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$4',
  span: {
    fontSize: '$md',
  },
})
