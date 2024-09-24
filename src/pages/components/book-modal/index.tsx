import { Bookmark, BookOpen, X } from 'phosphor-react'
import {
  BookInfo,
  BookInfoFooter,
  BookInfoMain,
  BookInfoReviews,
  BookInfoStars,
  BookInfoTitle,
  BookInfoTitleAndReviews,
  BookCategoriesInfo,
  CategoryInfo,
  CloseButtonContainer,
  ModalContainer,
  Pages,
  PagesInfo,
  Review,
  ReviewHeader,
  Reviews,
  ReviewsHeader,
  ReviewsList,
  ReviewStars,
  UserInfo,
  UserInfoText,
  ReviewContent,
  ReviewButton,
} from './styles'
import Image from 'next/image'

import { ProfileImage } from '../profile-image'
import { Overlay } from '@/pages/explore/styles'
import { Book } from '@/pages/api/books/get-books.api'
import { SetStateAction, useState } from 'react'
import { Category } from '@/pages/api/books/get-categories.api'
import { Stars } from '../stars'
import { useSession } from 'next-auth/react'
import { NewReviewForm } from '../new-review-form'
import { formatDistanceToNow, isToday } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import Link from 'next/link'

interface BookModalProps {
  active: boolean
  setVisibility: React.Dispatch<SetStateAction<boolean>>
  setSelectedBook: React.Dispatch<SetStateAction<Book | undefined>>
  selectedBook: Book | undefined
  categories: Category[]
  calculateRating: (id: string) => number
  setShowLoginModal: React.Dispatch<SetStateAction<boolean>>
  selectedReviewId?: string
  setSelectedReviewId?: React.Dispatch<SetStateAction<string>>
}

export function BookModal({
  active,
  setVisibility,
  selectedBook,
  setSelectedBook,
  categories,
  calculateRating,
  setShowLoginModal,
  selectedReviewId,
}: BookModalProps) {
  const session = useSession()
  const isLogged = session.status === 'authenticated'
  const [showNewReviewForm, setShowNewReviewForm] = useState(false)

  const selectedBookRatingsOrdered = selectedBook?.ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  if (!active) {
    return null
  }

  const email = session.data?.user?.email

  const userAlreadyReviewed = selectedBook?.ratings.some((rating) => {
    return rating.user.email === email
  })

  function findBookCategories() {
    const bookCategories = categories.filter((category) => {
      return selectedBook?.categories.find(
        (item) => category.id === item.categoryId,
      )
    })

    return bookCategories
  }

  function handleToggleNewReviewForm() {
    if (isLogged) {
      setShowNewReviewForm(!showNewReviewForm)
    } else {
      setShowLoginModal(true)
    }
  }

  if (selectedBook) {
    return (
      <>
        <Overlay />
        <ModalContainer>
          <CloseButtonContainer>
            <X size={20} onClick={() => setVisibility(false)} />
          </CloseButtonContainer>
          <BookInfo>
            <BookInfoMain>
              <Image
                width={171}
                height={242}
                src={selectedBook.cover_url}
                alt=""
              />
              <BookInfoTitleAndReviews>
                <BookInfoTitle>
                  <h1>{selectedBook.name}</h1>
                  <p>{selectedBook.author}</p>
                </BookInfoTitle>
                <BookInfoReviews>
                  <BookInfoStars>
                    <Stars
                      rating={calculateRating(selectedBook.id)}
                      size={20}
                    />
                  </BookInfoStars>
                  {selectedBook.ratings.length > 1 ? (
                    <span>{selectedBook.ratings.length} Avalições</span>
                  ) : (
                    <span>{selectedBook.ratings.length} Avaliação</span>
                  )}
                </BookInfoReviews>
              </BookInfoTitleAndReviews>
            </BookInfoMain>
            <BookInfoFooter>
              <BookCategoriesInfo>
                <Bookmark size={24} />
                <CategoryInfo>
                  <p>Categoria</p>
                  <div>
                    {findBookCategories().map((category) => {
                      return <h1 key={category.id}>{category.name}</h1>
                    })}
                  </div>
                </CategoryInfo>
              </BookCategoriesInfo>
              <Pages>
                <BookOpen size={24} />
                <PagesInfo>
                  <p>Páginas</p>
                  <h1>{selectedBook.total_pages}</h1>
                </PagesInfo>
              </Pages>
            </BookInfoFooter>
          </BookInfo>

          <Reviews>
            <ReviewsHeader>
              <span>Avaliações</span>
              {userAlreadyReviewed ? (
                ''
              ) : (
                <ReviewButton onClick={() => handleToggleNewReviewForm()}>
                  Avaliar
                </ReviewButton>
              )}
            </ReviewsHeader>

            {showNewReviewForm && (
              <NewReviewForm
                selectedBook={selectedBook}
                setSelectedBook={setSelectedBook}
                handleToggleNewReviewForm={handleToggleNewReviewForm}
              />
            )}

            <ReviewsList>
              {selectedBookRatingsOrdered?.map((rating) => {
                return (
                  <Review key={rating.id}>
                    <ReviewHeader>
                      <UserInfo>
                        <ProfileImage src={rating.user.image} width={40} />
                        <UserInfoText>
                          <div>
                            <Link href={`/profile/${rating.user_id}`}>
                              {rating.user.name}
                            </Link>
                          </div>

                          <span>
                            {formatDistanceToNow(rating.created_at, {
                              addSuffix: true,
                              locale: ptBR,
                            })}
                          </span>
                        </UserInfoText>
                      </UserInfo>
                      <ReviewStars>
                        <Stars rating={rating.rate} size={16} />
                      </ReviewStars>
                    </ReviewHeader>
                    <ReviewContent>
                      <p>{rating.description}</p>
                    </ReviewContent>
                  </Review>
                )
              })}
            </ReviewsList>
          </Reviews>
        </ModalContainer>
      </>
    )
  }
}
