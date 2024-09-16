import { prisma } from '../../../libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export interface Category {
  id: string
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }
  const categories = await prisma.category.findMany({
    select: {
      name: true,
      id: true,
    },
  })

  return res.json({ categories })
}
