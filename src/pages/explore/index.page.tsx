import { Binoculars, MagnifyingGlass, Star, StarHalf } from 'phosphor-react'
import { Sidebar } from '../components/sidebar'

import { Container, MainContainer } from '../styles'
import {
  InputContainer,
  Header,
  BookCategories,
  BookList,
  CategoryItem,
  ExploreContainer,
  BookBox,
  BookInfo,
  Info,
  BookImage,
  StarsContainer,
} from './styles'

import Image from 'next/image'
import { BookModal } from '../components/book-modal'
import { api } from '@/libs/axios'
import { GetServerSideProps, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import { Stars } from '../components/stars'
import { Book } from '../api/books/get-books.api'
import { Rating } from '../api/ratings/get-ratings.api'
import { Category } from '../api/books/get-categories.api'
import { User } from '../api/users/get-users.api'

interface ExplorePageProps {
  books: Book[]
  categories: Category[]
  ratings: Rating[]
}

export default function Explore({
  books,
  categories,
  ratings,
}: ExplorePageProps) {
  const [bookList, setBookList] = useState(books)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [wordFiltering, setWordFiltering] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [selectedBook, setSelectedBook] = useState<Book>()

  function calculateRating(id: string) {
    const bookRatings = ratings.filter((rating) => rating.book_id === id)

    const ratingAvg =
      bookRatings.reduce((acc, curr) => curr.rate + acc, 0) / bookRatings.length

    return ratingAvg
  }

  function handleCategoryFilter(id: string) {
    setInputValue('')
    setWordFiltering(false)
    setSelectedCategory(id)
    if (id !== 'all') {
      const newList = books.filter((book) => {
        return book.categories.find((item) => {
          return item.categoryId === id
        })
      })

      setBookList(newList)

      return
    }

    setBookList(books)
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setWordFiltering(true)
    const input = e.target.value
    setInputValue(input)

    const newList = books.filter((book) => {
      return book.name.toLowerCase().includes(input.toLowerCase())
    })

    setBookList(newList)
  }

  function handleOpenModal(id: string) {
    const bookToShow = books.find((book) => {
      return book.id === id
    })

    setSelectedBook(bookToShow)

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
      <BookModal
        active={showModal}
        setVisibility={setShowModal}
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
        categories={categories}
        calculateRating={calculateRating}
      />
      <Sidebar activePage="explore" />
      <MainContainer>
        <Header>
          <Binoculars size={32} /> <h1>Explorar</h1>
          <InputContainer>
            <input
              placeholder="Buscar livro ou autor"
              type="text"
              onChange={handleInputChange}
              value={inputValue}
            />
            <MagnifyingGlass size={16} />
          </InputContainer>
        </Header>
        <ExploreContainer>
          <BookCategories>
            <CategoryItem
              selected={selectedCategory === 'all' && !wordFiltering}
              onClick={() => handleCategoryFilter('all')}
            >
              <span>Tudo</span>
            </CategoryItem>
            {categories.map((category) => {
              return (
                <CategoryItem
                  key={category.id}
                  onClick={() => {
                    handleCategoryFilter(category.id)
                  }}
                  selected={selectedCategory === category.id && !wordFiltering}
                >
                  <span>{category.name}</span>
                </CategoryItem>
              )
            })}
          </BookCategories>

          <BookList>
            {bookList.map((book) => {
              return (
                <BookBox key={book.id} onClick={() => handleOpenModal(book.id)}>
                  <Image
                    width={100}
                    height={150}
                    src={book.cover_url}
                    alt=""
                    style={BookImage}
                  />
                  <BookInfo>
                    <Info>
                      <h1>{book.name}</h1>
                      <span>{book.author}</span>
                    </Info>

                    <StarsContainer>
                      <Stars size={16} rating={calculateRating(book.id)} />
                    </StarsContainer>
                  </BookInfo>
                </BookBox>
              )
            })}
          </BookList>
        </ExploreContainer>
      </MainContainer>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const booksResponse = await api.get(
    'http://localhost:3000/api/books/get-books',
  )
  const books = booksResponse.data.books

  const categoriesRespose = await api.get(
    'http://localhost:3000/api/books/get-categories',
  )
  const categories = categoriesRespose.data.categories

  const ratingResponse = await api.get(
    'http://localhost:3000/api/ratings/get-ratings',
  )
  const ratings = ratingResponse.data.ratings

  return {
    props: {
      books,
      categories,
      ratings,
    },
  }
}
