import { ChartLineUp } from 'phosphor-react'
import { PopularBooks } from './components/popular-books'
import { Sidebar } from './components/sidebar'
import Image from 'next/image'
import {
  Container,
  Content,
  ContentHeader,
  Header,
  Info,
  MainContainer,
  More,
  RecentReviewsContainer,
  Review,
  ReviewContent,
  ReviewHeader,
  ReviewInfo,
  ReviewText,
  StarsContainer,
} from './styles'
import { ProfileImage } from './components/profile-image'
import { GetServerSideProps } from 'next'
import { api } from '@/libs/axios'
import { Rating } from './api/ratings/get-ratings.api'
import { Stars } from './components/stars'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { YourLastRead } from './components/your-last-read'
import { useSession } from 'next-auth/react'
import { User } from './api/users/get-users.api'
import { Book } from './api/books/get-books.api'
import { useEffect, useState } from 'react'
import { BookModal } from './components/book-modal'
import { Category } from './api/books/get-categories.api'
import Link from 'next/link'
import { LoginModal } from './components/login-modal'

interface HomePageProps {
  ratings: Rating[]
  users: User[]
  books: Book[]
  categories: Category[]
}

export default function Home({
  ratings,
  users,
  books,
  categories,
}: HomePageProps) {
  const [showModal, setShowModal] = useState(false)
  const [selectedBook, setSelectedBook] = useState<Book>()
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [selectedReviewId, setSelectedReviewId] = useState<string | undefined>(
    undefined,
  )
  const session = useSession()

  const user = users.find((user) => user.email === session.data?.user?.email)

  const myReviews = user?.Rating.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })
  const lastRead = myReviews && myReviews[0]

  function calculateRating(id: string) {
    const bookRatings = ratings.filter((rating) => rating.book_id === id)

    const ratingAvg =
      bookRatings.reduce((acc, curr) => curr.rate + acc, 0) / bookRatings.length

    return ratingAvg
  }

  function handleOpenModal(id: string, ratingId?: string | undefined) {
    const bookToShow = books.find((book) => {
      return book.id === id
    })

    setSelectedBook(bookToShow)
    setSelectedReviewId(ratingId)
    setShowModal(true)
  }

  useEffect(() => {
    const body = document.body
    if (showModal) {
      body.style.overflow = 'hidden'
      body.style.height = '10%%'
    } else {
      const body = document.body
      body.style.overflow = ''
      body.style.height = ''
    }
  }, [showModal])

  return (
    <Container>
      <Sidebar activePage="home" />
      <BookModal
        active={showModal}
        setVisibility={setShowModal}
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
        categories={categories}
        calculateRating={calculateRating}
        setShowLoginModal={setShowLoginModal}
        selectedReviewId={selectedReviewId}
      />
      <LoginModal
        active={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
      <MainContainer>
        <Header>
          <ChartLineUp size={32} />
          <h1>Início</h1>
        </Header>
        {lastRead && (
          <YourLastRead openModal={handleOpenModal} lastRead={lastRead} />
        )}
        <RecentReviewsContainer>
          <span>Avaliações mais recentes</span>

          {ratings.map((rating) => {
            return (
              <Review id={rating.id} key={rating.id}>
                <ReviewHeader>
                  <ReviewInfo>
                    <ProfileImage src={rating.user.image} width={40} />

                    <Info>
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
                    </Info>
                  </ReviewInfo>
                  <StarsContainer>
                    <Stars size={16} rating={rating.rate} />
                  </StarsContainer>
                </ReviewHeader>

                <ReviewContent>
                  <Image
                    src={rating.book.cover_url}
                    height={134}
                    alt="Livro"
                    width={100}
                  />
                  <Content>
                    <ContentHeader>
                      <h1>{rating.book.name}</h1>
                      <span>{rating.book.author}</span>
                    </ContentHeader>
                    <ReviewText>
                      {rating.description.length > 300 ? (
                        <>
                          {rating.description.slice(0, 300)}...{' '}
                          <More
                            onClick={() =>
                              handleOpenModal(rating.book_id, rating.id)
                            }
                          >
                            Ver mais
                          </More>
                        </>
                      ) : (
                        rating.description
                      )}
                    </ReviewText>
                  </Content>
                </ReviewContent>
              </Review>
            )
          })}
        </RecentReviewsContainer>
      </MainContainer>
      <PopularBooks
        openModal={handleOpenModal}
        books={books}
        ratings={ratings}
      />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const ratingsResponse = await api.get(
    'http://localhost:3000/api/ratings/get-ratings',
  )
  const ratings = ratingsResponse.data.ratings

  const usersResponse = await api.get(
    'http://localhost:3000/api/users/get-users',
  )
  const users = usersResponse.data.users

  const booksResponse = await api.get(
    'http://localhost:3000/api/books/get-books',
  )
  const books = booksResponse.data.books

  const categoriesResponse = await api.get(
    'http://localhost:3000/api/books/get-categories',
  )
  const categories = categoriesResponse.data.categories

  return {
    props: {
      ratings,
      users,
      books,
      categories,
    },
  }
}
