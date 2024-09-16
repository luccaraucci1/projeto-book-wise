import {
  ProfileContainer,
  UserInfo,
  Info,
  Item,
  ItemInfo,
  ProfileItems,
} from './styles'
import { BookmarkSimple, BookOpen, Books, UserList } from 'phosphor-react'
import { ProfileImage } from '../profile-image'
import { User } from '@/pages/api/users/get-users.api'

interface UserProfileProps {
  user: User
}

interface FrequencyMap {
  [key: string]: number
}

export function UserProfile({ user }: UserProfileProps) {
  const pagesRead = user.Rating.map((rating) => rating.book.total_pages).reduce(
    (acc, curr) => {
      return acc + curr
    },
    0,
  )

  const booksRead = user.Rating.length

  const categoriesRead = user.Rating.map((rating) => {
    return rating.book.categories.map((item) => item.category.name)
  }).flat()

  function findMostPopularCategory(arr: string[]) {
    const frequencyMap: FrequencyMap = {}

    arr.forEach((item) => {
      frequencyMap[item] = (frequencyMap[item] || 0) + 1
    })

    const popularCategory = Object.keys(frequencyMap).reduce((a, b) =>
      frequencyMap[a] > frequencyMap[b] ? a : b,
    )

    return popularCategory
  }

  return (
    <ProfileContainer>
      <UserInfo>
        <ProfileImage src={user.image} width={72} />
        <Info>
          <h1>{user.name}</h1>
          <span>membro desde {user.createdAt.toString().substring(0, 4)}</span>
        </Info>
      </UserInfo>

      <ProfileItems>
        <Item>
          <BookOpen size={32} />
          <ItemInfo>
            <h1>{pagesRead}</h1>
            <span>Páginas Lidas</span>
          </ItemInfo>
        </Item>
        <Item>
          <Books size={32} />
          <ItemInfo>
            <h1>{booksRead}</h1>
            <span>Livros avaliados</span>
          </ItemInfo>
        </Item>
        <Item>
          <UserList size={32} />
          <ItemInfo>
            <h1>{booksRead}</h1>
            <span>Autores lidos</span>
          </ItemInfo>
        </Item>
        <Item>
          <BookmarkSimple size={32} />
          <ItemInfo>
            <h1>{findMostPopularCategory(categoriesRead)}</h1>
            <span>Categoria mais lida</span>
          </ItemInfo>
        </Item>
      </ProfileItems>
    </ProfileContainer>
  )
}
