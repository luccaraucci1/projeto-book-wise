import { styled } from '../../../../stitches.config'

export const SidebarContainer = styled('div', {
  height: 'calc(100vh - 40px)',
  backgroundImage: 'url(/images/sidebarbg.png)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '$10',
  maxWidth: '232px',
  borderRadius: '$md',

  position: 'fixed',
})

export const SidebarItems = styled('div', {
  display: 'flex',
  marginTop: '4rem',
  flexDirection: 'column',
  gap: '$8',
  a: {
    textDecoration: 'none',
  },
})

export const Item = styled('div', {
  display: 'flex',
  lineHeight: '$base',
  color: '$gray400',
  gap: '$4',
  transition: 'color 0.2s',
  position: 'relative',
  cursor: 'pointer',

  '&:hover': {
    color: '$gray100',
  },

  variants: {
    active: {
      true: {
        color: '$gray100',

        '&::before': {
          content: '',
          width: '4px',
          height: '22px',
          background: '$gradient-vertical',
          position: 'absolute',
          top: 0,
          left: -16,
          borderRadius: '$full',
        },
      },
    },
  },
})

export const LoginOrLogout = styled('div', {
  display: 'flex',
  lineHeight: '$base',
  gap: '$4',
  marginTop: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'default',
  svg: {
    cursor: 'pointer',
  },

  variants: {
    logged: {
      false: {
        cursor: 'pointer',
        svg: {
          color: '$green100',
          cursor: 'pointer',
        },
      },
    },
  },
})
