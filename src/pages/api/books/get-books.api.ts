import { prisma } from '../../../libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { Rating } from '../ratings/get-ratings.api'
import { Category } from './get-categories.api'

export interface CategoriesOnBooks {
  book_id: string
  categoryId: string
  category: Category
}
export interface Book {
  id: string
  author: string
  name: string
  cover_url: string
  total_pages: number
  categories: CategoriesOnBooks[]
  ratings: Rating[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }
  const books = await prisma.book.findMany({
    include: {
      ratings: {
        include: {
          user: true,
        },
      },
      categories: true,
    },
  })

  return res.json({ books })
}
