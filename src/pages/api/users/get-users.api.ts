import { prisma } from '../../../libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { Rating } from '../ratings/get-ratings.api'

export interface User {
  id: string
  name: string
  image: string
  email: string
  createdAt: Date
  Rating: Rating[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }
  const users = await prisma.user.findMany({
    include: {
      Rating: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  })

  return res.json({ users })
}
