import { prisma } from '../../../libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { Book } from '../books/get-books.api'
import { User } from '../users/get-users.api'

export interface Rating {
  rate: number
  description: string
  book_id: string
  user_id: string
  id: string
  created_at: Date
  user: User
  book: Book
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }
  const ratings = await prisma.rating.findMany({
    include: {
      user: true,
      book: true,
    },
    orderBy: {
      created_at: 'desc',
    },
  })

  return res.json({ ratings })
}
