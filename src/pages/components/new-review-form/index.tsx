import { zodResolver } from '@hookform/resolvers/zod'
import { X, Check } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ProfileImage } from '../profile-image'
import { ReviewStarsFiller } from '../review-stars-filler'
import {
  NewReviewContainer,
  NewReviewHeader,
  NewReviewUserInfo,
  NewReviewStars,
  NewReviewButtons,
  Error,
} from './styles'
import { useSession } from 'next-auth/react'
import React, { SetStateAction, useEffect, useState } from 'react'
import { api } from '@/libs/axios'
import { Book } from '@/pages/api/books/get-books.api'

interface NewReviewForm {
  handleToggleNewReviewForm: (show: boolean) => void
  selectedBook: Book
  setSelectedBook: React.Dispatch<SetStateAction<Book | undefined>>
}

const postFormSchema = z.object({
  description: z
    .string()
    .min(3, { message: 'A avaliação deve ter no mínimo 3 caracteres' }),
  rate: z
    .number()
    .min(1, { message: 'A avaliação deve ter no mínimo uma (1) estrela' }),
})

export type Post = z.infer<typeof postFormSchema>

export function NewReviewForm({
  handleToggleNewReviewForm,
  selectedBook,
  setSelectedBook,
}: NewReviewForm) {
  const [starsRating, setStarsRating] = useState(0)
  const session = useSession()
  const userEmail = session.data?.user?.email

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<Post>({
    resolver: zodResolver(postFormSchema),
  })

  async function handlePostSubmit(data: Post) {
    try {
      await api.post('/ratings/post-rating', {
        description: data.description,
        rate: data.rate,
        email: userEmail,
        bookId: selectedBook.id,
        created_at: new Date(),
      })

      handleToggleNewReviewForm(false)

      getNewRatings()
    } catch (error) {
      console.error('Error submitting rating:', error)
    }
  }
  function handleUpdateStarsRating(rating: number) {
    setStarsRating(rating)
  }

  async function getNewRatings() {
    const response = await api.get('/books/get-books')
    const books: Book[] = response.data.books

    const updatedBook = books.find((book) => {
      return book.id === selectedBook.id
    })

    setSelectedBook(updatedBook)
  }

  useEffect(() => {
    setValue('rate', starsRating)
  }, [starsRating, setValue])

  return (
    <form onSubmit={handleSubmit(handlePostSubmit)}>
      <NewReviewContainer>
        <NewReviewHeader>
          <NewReviewUserInfo>
            {session.data?.user?.image && (
              <ProfileImage src={session.data.user.image} width={40} />
            )}
            <h1>{session.data?.user?.name}</h1>
          </NewReviewUserInfo>
          <NewReviewStars>
            <ReviewStarsFiller
              starsRating={starsRating}
              updateStarsRating={handleUpdateStarsRating}
            />
          </NewReviewStars>
        </NewReviewHeader>
        <textarea
          {...register('description')}
          rows={8}
          placeholder="Escreva sua avaliação"
        />

        {errors.description?.message && (
          <Error>{errors.description?.message}</Error>
        )}
        {errors.rate?.message && <Error>{errors.rate?.message}</Error>}
        <NewReviewButtons>
          <button disabled={isSubmitting}>
            <X
              size={24}
              weight="bold"
              color="#8381D9"
              onClick={() => handleToggleNewReviewForm(false)}
            />
          </button>
          <button disabled={isSubmitting} type="submit">
            <Check size={24} weight="bold" color="#50b2c0" />
          </button>
        </NewReviewButtons>
      </NewReviewContainer>
    </form>
  )
}
