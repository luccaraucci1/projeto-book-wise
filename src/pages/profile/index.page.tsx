import { MagnifyingGlass, User as UserIcon } from 'phosphor-react'
import { Sidebar } from '../components/sidebar'
import { Container, Header, MainContainer } from '../styles'
import {
  MyBooks,
  InputContainer,
  BookContainer,
  BookBox,
  BookContent,
  BookHeader,
  BookInfo,
  StarsContainer,
} from './styles'
import Image from 'next/image'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { UserProfile } from '../components/user-profile/index.page'
import { GetServerSideProps } from 'next'
import { api } from '@/libs/axios'
import { User } from '../api/users/get-users.api'
import { useSession } from 'next-auth/react'
import { Stars } from '../components/stars'
import { useEffect, useState } from 'react'
import { Book } from '../api/books/get-books.api'
import { Rating } from '../api/ratings/get-ratings.api'

interface ProfilePageProps {
  users: User[]
  books: Book[]
}

export default function Profile({ users, books }: ProfilePageProps) {
  const session = useSession()

  const user = users.find((user) => user.email === session.data?.user?.email)

  const myReviews = user?.Rating.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  const [myReviewsList, setMyReviewsList] = useState(myReviews)
  const [inputValue, setInputValue] = useState('')

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value
    setInputValue(input)

    const newList = myReviews?.filter((review) => {
      return review.book.name.toLowerCase().includes(input.toLowerCase())
    })

    setMyReviewsList(newList)
  }

  return (
    <Container>
      <Sidebar activePage="profile" />
      <MainContainer>
        <Header>
          <UserIcon size={32} /> <h1>Perfil</h1>
        </Header>
        <MyBooks>
          <InputContainer>
            <input
              onChange={handleInputChange}
              value={inputValue}
              placeholder="Buscar livro avaliado"
              type="text"
            />
            <MagnifyingGlass size={16} />
          </InputContainer>
          {myReviewsList &&
            myReviewsList.map((item) => {
              return (
                <BookContainer key={item.id}>
                  <p>
                    {formatDistanceToNow(item.created_at, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </p>
                  <BookBox>
                    <BookHeader>
                      <Image
                        src={item.book.cover_url}
                        width={100}
                        height={134}
                        alt=""
                      />
                      <BookInfo>
                        <h1>{item.book.name}</h1>
                        <span>{item.book.author}</span>

                        <StarsContainer>
                          <Stars size={16} rating={item.rate} />
                        </StarsContainer>
                      </BookInfo>
                    </BookHeader>

                    <BookContent>
                      <p>{item.description}</p>
                    </BookContent>
                  </BookBox>
                </BookContainer>
              )
            })}
        </MyBooks>
      </MainContainer>

      {user && <UserProfile user={user} />}
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('http://localhost:3000/api/users/get-users')
  const users = response.data.users

  const booksResponse = await api.get(
    'http://localhost:3000/api/books/get-books',
  )
  const books = booksResponse.data.books

  return {
    props: {
      users,
      books,
    },
  }
}
