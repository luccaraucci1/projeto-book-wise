import Link from 'next/link'
import { CaretRight, Star } from 'phosphor-react'
import {
  BookList,
  PopularBooksContainer,
  BookBox,
  PopularBooksHeader,
  BookInfo,
  Stars,
  ImageContainer,
} from './styles'
import Book from '../../../../public/images/books/Book.png'
import Image from 'next/image'

export function PopularBooks() {
  return (
    <PopularBooksContainer>
      <PopularBooksHeader>
        <span>Livros populares</span>
        <Link href="">
          <span>
            Ver todos <CaretRight />
          </span>
        </Link>
      </PopularBooksHeader>

      <BookList>
        <BookBox>
          <ImageContainer>
            <Image width={64} src={Book} alt="" />
          </ImageContainer>
          <BookInfo>
            <h1>A revolução dos bichos</h1>
            <span>George Ordell</span>

            <Stars>
              <Star weight="fill" />
            </Stars>
          </BookInfo>
        </BookBox>
      </BookList>
    </PopularBooksContainer>
  )
}
