import {
  Header,
  Text,
  Title,
  YourLastReadBox,
  YourLastReadContainer,
  YourLastReadContent,
  YourLastReadHeader,
  StarsContainer,
} from './styles'
import Image from 'next/image'
import Book from '../../../../public/images/books/Book.png'
import { CaretRight, Star } from 'phosphor-react'
import Link from 'next/link'
import { Rating } from '@/pages/api/ratings/get-ratings.api'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { Stars } from '../stars'

interface YourLastReadProps {
  lastRead: Rating
  openModal: (id: string) => void
}

export function YourLastRead({ lastRead, openModal }: YourLastReadProps) {
  console.log(lastRead)

  return (
    <YourLastReadContainer onClick={() => openModal(lastRead.book_id)}>
      <YourLastReadHeader>
        <span>Sua última leitura</span>
        <Link href="/profile">
          <span>Ver Todas</span> <CaretRight size={16} />
        </Link>
      </YourLastReadHeader>
      <YourLastReadBox>
        <Image
          alt="Capa do livro"
          src={lastRead.book.cover_url}
          height={152}
          width={100}
        />
        <YourLastReadContent>
          <Header>
            <span>
              {formatDistanceToNow(lastRead.created_at, {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
            <StarsContainer>
              <Stars rating={lastRead.rate} size={16} />
            </StarsContainer>
          </Header>
          <Title>
            <h1>{lastRead.book.name}</h1>
            <span>{lastRead.book.author}</span>
          </Title>
          <Text>{lastRead.description}</Text>
        </YourLastReadContent>
      </YourLastReadBox>
    </YourLastReadContainer>
  )
}
