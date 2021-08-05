import User, { IUser } from '../models/user.model'
import { Request, Response, NextFunction } from 'express'

export async function create(req: Request, res: Response, next: NextFunction): Promise<void> {
  const user: IUser = await User.create(req.body)

  res.status(201).json(user)
}

export async function list(req: Request, res: Response): Promise<void> {
  const users: IUser[] = await User.find()

  res.status(200).json(users)
}
