import responses from '@src/constants/responses';
import  { Request, Response, NextFunction } from 'express';

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.error(err);
    res.status(500).json({ ...responses["101"](), data: [] });
  };
  