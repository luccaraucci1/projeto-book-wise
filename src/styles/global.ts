import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray800',
    color: '$gray100',
    fontFamily: '$default',
  },

  '::-webkit-scrollbar': {
    width: '8px',
    height: '12px',
  },
  '::-webkit-scrollbar-track': {
    background: '$gray700',
  },
  '::-webkit-scrollbar-thumb': {
    background: '$gray600',
    borderRadius: '6px',
  },
})
