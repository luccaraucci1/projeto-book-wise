import Link from 'next/link'
import { CaretRight } from 'phosphor-react'
import {
  BookList,
  PopularBooksContainer,
  BookBox,
  PopularBooksHeader,
  BookInfo,
  ImageContainer,
  StarsContainer,
} from './styles'
import Image from 'next/image'
import { Book } from '@/pages/api/books/get-books.api'
import { Rating } from '@/pages/api/ratings/get-ratings.api'
import { Stars } from '../stars'

interface PopularBooksProps {
  books: Book[]
  ratings: Rating[]
  openModal: (id: string) => void
}

export function PopularBooks({ books, ratings, openModal }: PopularBooksProps) {
  const booksSortedByPopularity = books.sort(
    (a, b) => b.ratings.length - a.ratings.length,
  )

  const popularBooks = booksSortedByPopularity.slice(0, 3)

  function calculateRating(id: string) {
    const bookRatings = ratings.filter((rating) => rating.book_id === id)

    const ratingAvg =
      bookRatings.reduce((acc, curr) => curr.rate + acc, 0) / bookRatings.length

    return ratingAvg
  }

  return (
    <PopularBooksContainer>
      <PopularBooksHeader>
        <span>Livros populares</span>
        <Link href="/explore">
          <span>
            Ver todos <CaretRight />
          </span>
        </Link>
      </PopularBooksHeader>

      <BookList>
        {popularBooks.map((book) => {
          return (
            <BookBox onClick={() => openModal(book.id)} key={book.id}>
              <ImageContainer>
                <Image src={book.cover_url} height={94} width={64} alt="" />
              </ImageContainer>
              <BookInfo>
                <h1>{book.name}</h1>
                <span>{book.author}</span>

                <StarsContainer>
                  <Stars rating={calculateRating(book.id)} size={16} />
                </StarsContainer>
              </BookInfo>
            </BookBox>
          )
        })}
      </BookList>
    </PopularBooksContainer>
  )
}
