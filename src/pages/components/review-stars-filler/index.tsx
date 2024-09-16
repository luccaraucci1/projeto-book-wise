import { Star } from 'phosphor-react'
import React, { SetStateAction, useState } from 'react'

interface ReviewStarsFiller {
  starsRating: number
  updateStarsRating: (rating: number) => void
}

export function ReviewStarsFiller({
  starsRating,
  updateStarsRating,
}: ReviewStarsFiller) {
  const [stars, setStars] = useState(
    Array.from({ length: 5 }, (_, index) => (
      <Star key={index} width={22} onClick={() => handleFillStar(index)} />
    )),
  )

  function handleFillStar(starIndex: number) {
    const newArray = []
    let rating = 0
    for (let i = 0; i < 5; i++) {
      if (starIndex >= i) {
        newArray.push(
          <Star
            weight="fill"
            width={22}
            key={i}
            onClick={() => handleFillStar(i)}
          />,
        )
        rating += 1
      } else {
        newArray.push(
          <Star key={i} width={22} onClick={() => handleFillStar(i)} />,
        )
      }
    }

    setStars(newArray)
    updateStarsRating(rating)
  }

  return stars
}
