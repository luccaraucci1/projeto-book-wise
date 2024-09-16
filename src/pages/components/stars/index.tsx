import { Star, StarHalf } from 'phosphor-react'
import { StarsContainer } from './styles'

interface StarsProps {
  rating: number
  size: number
}

export function Stars({ rating, size }: StarsProps) {
  const starsArray = ['', '', '', '', '']
  let count = rating
  for (const i in starsArray) {
    if (count >= 0.75) {
      starsArray[i] = 'star'
      count -= 1
    } else if (count < 1 && count >= 0.25) {
      starsArray[i] = 'half'
      count = 0
    } else {
      starsArray[i] = ''
    }
  }

  return (
    <StarsContainer>
      {starsArray.map((star, i) => {
        if (star === 'star') {
          return <Star size={size} weight="fill" key={i} />
        } else if (star === 'half') {
          return <StarHalf size={size} weight="fill" key={i} />
        } else {
          return <Star size={size} key={i} />
        }
      })}
    </StarsContainer>
  )
}
