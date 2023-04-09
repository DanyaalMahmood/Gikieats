import { Request, Response } from "express"
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()


const findDesi = async(req: Request, res: Response) => {
  try {
    const desiItems = await prisma.item.findMany({
      where: {
        category: 'desi'
      }
    })
    res.status(200).json(desiItems)
  } catch (err) {
    res.status(400).json({ error: 'Something went wrong' })
  }
}


const findFastFood = async(req: Request, res: Response) => {
  try {
    const fastfoodItems = await prisma.item.findMany({
      where: {
        category: 'fastfood'
      }
    })
    res.status(200).json(fastfoodItems)
  } catch (err) {
    res.status(400).json({ error: 'Something went wrong' })
  }
}


const findOthers = async(req: Request, res: Response) => {
  try {
    const otherItems = await prisma.item.findMany({
      where: {
        category: 'other'
      }
    })
    res.status(200).json(otherItems)
  } catch (err) {
    res.status(400).json({ error: 'Something went wrong' })
  }
}

export {findDesi, findFastFood, findOthers};