import { prisma } from '../../../libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { description, rate, email, bookId, created_at } = req.body

  const rating = await prisma.rating.create({
    data: {
      description,
      created_at,
      rate,
      user: {
        connect: {
          email,
        },
      },
      book: {
        connect: {
          id: bookId,
        },
      },
    },
  })

  return res.status(201).end()
}
