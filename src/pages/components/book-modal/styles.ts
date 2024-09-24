import { styled } from '../../../../stitches.config'

export const ModalContainer = styled('div', {
  background: '$gray800',
  width: '45%',
  height: '100%',
  position: 'fixed',
  top: 0,
  right: 0,
  boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.1)',
  padding: '0 $12',
  overflowY: 'scroll',
  zIndex: 2,
})

export const CloseButtonContainer = styled('div', {
  padding: '$4 0',
  textAlign: 'right',
  svg: {
    color: '$gray400',
    cursor: 'pointer',
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  background: '$gray700',
  borderRadius: '$md',
  padding: '$6',
  gap: '$8',
  marginBottom: '$8',
})

export const BookInfoMain = styled('div', {
  display: 'flex',

  gap: '$4',
})

export const BookInfoTitleAndReviews = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const BookInfoTitle = styled('div', {
  h1: {
    fontSize: '$lg',
    marginBottom: '$2',
  },
  p: {
    color: '$gray300',
    fontSize: '$sm',
  },
})

export const BookInfoReviews = styled('div', {
  marginTop: 'auto',
  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const BookInfoStars = styled('div', {
  color: '$purple100',
})

export const BookInfoFooter = styled('div', {
  borderTop: '1px solid $gray600',
  display: 'flex',
  alignItems: 'center',

  padding: '$6 0',

  svg: {
    color: '$green100',
  },
  h1: {
    fontSize: '$md',
    color: '$gray300',
  },
  p: {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const BookCategoriesInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '50%',
  gap: '$4',
})

export const CategoryInfo = styled('div', {
  '>div': {
    display: 'flex',
    'h1:not(:last-child)::after': {
      content: ',',
      marginRight: '4px' /* optional spacing */,
    },
  },
})

export const Pages = styled('div', {
  display: 'flex',
  width: '50%',
  alignItems: 'center',
  gap: '$4',
})

export const PagesInfo = styled('div', {})

export const Reviews = styled('div', {
  span: {
    fontSize: '$sm',
  },
})

export const ReviewsHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$2',
})

export const ReviewButton = styled('div', {
  color: '$purple100',
  fontSize: '$sm',
  padding: '$1 $2',
  borderRadius: '$sm',
  cursor: 'pointer',

  '&:hover': {
    background: '$purple200',
  },
})

export const ReviewsList = styled('div', {})

export const Review = styled('div', {
  background: '$gray700',
  padding: '$5',
  borderRadius: '$md',
  marginBottom: '$4',
  p: {
    fontSize: '$sm',
    color: '$gray300',
  },
  svg: {
    color: '$purple100',
  },

  variants: {
    selected: {
      true: {
        background: '$gray600',
      },
    },
    hidden: {
      true: {
        display: 'none',
      },
    },
  },
})

export const ReviewHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  h1: {
    fontSize: '$md',
  },

  span: {
    color: '$gray300',
  },
})

export const UserInfo = styled('div', {
  display: 'flex',

  gap: '$4',
})

export const UserInfoText = styled('div', {
  a: {
    all: 'unset',
    fontSize: '$md',
    fontWeight: '$bold',
    cursor: 'pointer',
  },

  span: {
    color: '$gray400',
  },
})

export const ReviewStars = styled('div', {})

export const ReviewContent = styled('div', {
  marginTop: '$4',
})
