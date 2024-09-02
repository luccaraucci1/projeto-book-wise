import { styled } from '../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  padding: '$4',
})

export const MainContainer = styled('div', {
  margin: '$10',
  marginLeft: '275px',
})

export const Header = styled('div', {
  display: 'flex',
  lineHeight: '$tall',
  gap: '$2',
  marginBottom: '$12',

  h1: {
    fontSize: '24px',
  },
  svg: {
    color: '$green100',
  },
})

export const RecentReviewsContainer = styled('div', {
  span: {
    fontSize: '$sm',
  },
  '>span': {
    display: 'block',
    marginBottom: '$4',
  },
})

export const Review = styled('div', {
  background: '$gray700',
  padding: '$6',
  borderRadius: '$md',

  '@bp1': {
    backgoundColor: 'red',
  },
})

export const ReviewHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '$8',
})

export const ReviewInfo = styled('div', {
  display: 'flex',
  gap: '$4',
  h1: {
    fontSize: '$md',
    fontWeight: '$regular',
  },
  span: {
    color: '$gray400',
    fontSize: '$sm',
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
})

export const Info = styled('div', {})

export const Stars = styled('div', {
  svg: {
    color: '$purple100',
  },
})

export const ReviewContent = styled('div', {
  display: 'flex',
  gap: '$4',
})

export const Content = styled('div', {
  h1: {
    fontSize: '$lg',
    margin: 0,
  },
  span: {
    color: '$gray400',
  },
})

export const ContentHeader = styled('div', {
  marginBottom: '$4',
})

export const ReviewText = styled('p', {
  fontSize: '$sm',
})
