import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({message: 'No authorized'});
    }
    
    const payload = verify(token, process.env.JWT_SECRET);
    req.body = payload;
    next();
    
} catch (err) {
    return res.status(401).json(err.message);
  }
};
