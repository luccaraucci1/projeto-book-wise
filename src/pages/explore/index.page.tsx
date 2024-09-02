import { Binoculars, MagnifyingGlass, Star } from 'phosphor-react'
import { Sidebar } from '../components/sidebar'

import { Container, MainContainer } from '../styles'
import {
  InputContainer,
  Header,
  BookCategories,
  BookList,
  Category,
  ExploreContainer,
  BookBox,
  BookInfo,
  Info,
  Stars,
  BookImage,
} from './styles'

import Image from 'next/image'
import Book from '../../../public/images/books/Book.png'

export default function Explore() {
  return (
    <Container>
      <Sidebar activePage="explore" />
      <MainContainer>
        <Header>
          <Binoculars size={32} /> <h1>Explorar</h1>
          <InputContainer>
            <input placeholder="Buscar livro ou autor" type="text" />
            <MagnifyingGlass size={16} />
          </InputContainer>
        </Header>
        <ExploreContainer>
          <BookCategories>
            <Category selected>
              <span>Tudo</span>
            </Category>
            <Category>
              <span>Computação</span>
            </Category>
            <Category>
              <span>Educação</span>
            </Category>
          </BookCategories>
          <BookList>
            <BookBox>
              <Image width={100} src={Book} alt="" style={BookImage} />
              <BookInfo>
                <Info>
                  <h1>A revolução dos bichos</h1>
                  <span>George Orweell</span>
                </Info>

                <Stars>
                  <Star />
                </Stars>
              </BookInfo>
            </BookBox>

            <BookBox>
              <Image width={100} src={Book} alt="" style={BookImage} />
              <BookInfo>
                <Info>
                  <h1>A revolução dos bichos</h1>
                  <span>George Orweell</span>
                </Info>

                <Stars>
                  <Star />
                </Stars>
              </BookInfo>
            </BookBox>

            <BookBox>
              <Image width={100} src={Book} alt="" style={BookImage} />
              <BookInfo>
                <Info>
                  <h1>A revolução dos bichos</h1>
                  <span>George Orweell</span>
                </Info>

                <Stars>
                  <Star />
                </Stars>
              </BookInfo>
            </BookBox>

            <BookBox>
              <Image width={100} src={Book} alt="" style={BookImage} />
              <BookInfo>
                <Info>
                  <h1>A revolução dos bichos</h1>
                  <span>George Orweell</span>
                </Info>

                <Stars>
                  <Star />
                </Stars>
              </BookInfo>
            </BookBox>
          </BookList>
        </ExploreContainer>
      </MainContainer>
    </Container>
  )
}
