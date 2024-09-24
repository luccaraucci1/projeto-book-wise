import { MagnifyingGlass, User as UserIcon } from 'phosphor-react'
import { Sidebar } from '../../components/sidebar'
import { Container, Header, MainContainer } from '../../styles'
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
import { UserProfile } from '../../components/user-profile/index.page'
import { api } from '@/libs/axios'
import { User } from '../../api/users/get-users.api'
import { Stars } from '../../components/stars'
import { useEffect, useState } from 'react'
import { Rating } from '../../api/ratings/get-ratings.api'
import { useRouter } from 'next/router'

export default function AnotherProfile() {
  const router = useRouter()

  const userId = router.query.userId

  const [user, setUser] = useState<User | undefined>(undefined)

  const [myReviews, setMyReviews] = useState<Rating[] | undefined>(undefined)

  const [myReviewsList, setMyReviewsList] = useState<Rating[] | undefined>(
    undefined,
  )

  const [inputValue, setInputValue] = useState('')

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    async function fetchData() {
      const userResponse = await api.get('/users/get-user-from-id', {
        params: { userId },
      })
      const user = userResponse.data.user
      const myReviewsSorted = user?.Rating.sort((a: Rating, b: Rating) => {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
      })

      setMyReviews(myReviewsSorted)
      setUser(user)
    }

    fetchData()
  }, [userId])

  useEffect(() => {
    if (inputValue) {
      const newList = myReviews?.filter((review) => {
        return review.book.name.toLowerCase().includes(inputValue.toLowerCase())
      })
      setMyReviewsList(newList)
    } else {
      setMyReviewsList(myReviews)
    }
  }, [inputValue, myReviews])

  return (
    <Container>
      <Sidebar activePage="profile" />
      <MainContainer>
        <Header>
          <UserIcon size={32} /> <h1>Perfil</h1>
        </Header>
        <MyBooks>
          {
            <InputContainer>
              <input
                onChange={handleInputChange}
                value={inputValue}
                placeholder="Buscar livro avaliado"
                type="text"
              />
              <MagnifyingGlass size={16} />
            </InputContainer>
          }
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
