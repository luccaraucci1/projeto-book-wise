import { MagnifyingGlass, Star, User } from 'phosphor-react'
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
  Stars,
} from './styles'
import Image from 'next/image'
import Book from '../../../public/images/books/Book.png'
import { UserProfile } from '../components/user-profile/index.page'

export default function Profile() {
  return (
    <Container>
      <Sidebar activePage="profile" />
      <MainContainer>
        <Header>
          <User size={32} /> <h1>Perfil</h1>
        </Header>
        <MyBooks>
          <InputContainer>
            <input placeholder="Buscar livro avaliado" type="text" />
            <MagnifyingGlass size={16} />
          </InputContainer>
          <BookContainer>
            <p>Há 2 dias</p>
            <BookBox>
              <BookHeader>
                <Image width={100} src={Book} alt="" />
                <BookInfo>
                  <h1>Entendendo Algorítimos</h1>
                  <span>Aditia Bharga</span>

                  <Stars>
                    <Star weight="fill" />
                    <Star weight="fill" />
                    <Star weight="fill" />
                    <Star weight="fill" />
                    <Star weight="fill" />
                  </Stars>
                </BookInfo>
              </BookHeader>

              <BookContent>
                <p>
                  Tristique massa sed enim lacinia odio. Congue ut faucibus nunc
                  vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae
                  fringilla ut et suspendisse enim suspendisse vitae. Leo non
                  eget lacus sollicitudin tristique pretium quam. Mollis et
                  luctus amet sed convallis varius massa sagittis. Proin sed
                  proin at leo quis ac sem. Nam donec accumsan curabitur amet
                  tortor quam sit. Bibendum enim sit dui lorem urna amet elit
                  rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet
                  integer pellentesque.
                </p>
              </BookContent>
            </BookBox>
          </BookContainer>
        </MyBooks>
      </MainContainer>

      <UserProfile />
    </Container>
  )
}
