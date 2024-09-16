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

  const email = String(req.query.email)

  const user = await prisma.user.findUniqueOrThrow({
    where: { email },
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
  return res.json({ user })
}
