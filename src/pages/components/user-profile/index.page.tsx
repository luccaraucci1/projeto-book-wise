
import { ProfileContainer, UserInfo, Info, Item, ItemInfo, ProfileItems } from './styles'
import { BookmarkSimple, BookOpen, Books, UserList } from 'phosphor-react'
import { ProfileImage } from '../profile-image'

export function UserProfile() {
  return (
    <ProfileContainer>
      <UserInfo>
        <ProfileImage width={72} />
        <Info>
          <h1>Lucca Raucci</h1>
          <span>membro desde 2024</span>
        </Info>
      </UserInfo>

      <ProfileItems>
        <Item>
          <BookOpen size={32} />
          <ItemInfo>
            <h1>3853</h1>
            <span>Páginas Lidas</span>
          </ItemInfo>
        </Item>
        <Item>
          <Books size={32} />
          <ItemInfo>
            <h1>3853</h1>
            <span>Livros avaliados</span>
          </ItemInfo>
        </Item>
        <Item>
          <UserList size={32} />
          <ItemInfo>
            <h1>3853</h1>
            <span>Autores lidos</span>
          </ItemInfo>
        </Item>
        <Item>
          <BookmarkSimple size={32} />
          <ItemInfo>
            <h1>3853</h1>
            <span>Categoria mais lida</span>
          </ItemInfo>
        </Item>
      </ProfileItems>
    </ProfileContainer>
  )
}
