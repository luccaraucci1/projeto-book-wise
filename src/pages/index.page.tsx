import { ChartLineUp, Star } from 'phosphor-react'
import { PopularBooks } from './components/popular-books'
import { Sidebar } from './components/sidebar'
import Image from 'next/image'
import Book from '../../public/images/books/Book.png'
import {
  Container,
  Content,
  ContentHeader,
  Header,
  Info,
  MainContainer,
  RecentReviewsContainer,
  Review,
  ReviewContent,
  ReviewHeader,
  ReviewInfo,
  ReviewText,
  Stars,
} from './styles'
import { ProfileImage } from './components/profile-image'

export default function Home() {
  return (
    <Container>
      <Sidebar activePage="home" />
      <MainContainer>
        <Header>
          <ChartLineUp size={32} />
          <h1>Início</h1>
        </Header>
        <RecentReviewsContainer>
          <span>Avaliações mais recentes</span>
          <Review>
            <ReviewHeader>
              <ReviewInfo>
                <ProfileImage width={40} />

                <Info>
                  <h1>Lucca Raucci</h1>
                  <span>Hoje</span>
                </Info>
              </ReviewInfo>
              <Stars>
                <Star weight="fill" />
              </Stars>
            </ReviewHeader>

            <ReviewContent>
              <Image src={Book} alt="Livro" width={106} />
              <Content>
                <ContentHeader>
                  <h1>Book</h1>
                  <span>Douglas Adams</span>
                </ContentHeader>
                <ReviewText>
                  Semper et sapien proin vitae nisi. Feugiat neque integer donec
                  et aenean posuere amet ultrices. Cras fermentum id pulvinar
                  varius leo a in. Amet libero pharetra nunc elementum fringilla
                  velit ipsum. Sed vulputate massa velit nibh... ver mais
                </ReviewText>
              </Content>
            </ReviewContent>
          </Review>
        </RecentReviewsContainer>
      </MainContainer>
      <PopularBooks />
    </Container>
  )
}
