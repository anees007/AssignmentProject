import responses from '@src/constants/responses';
import { Request, Response, NextFunction } from 'express';
import Joi, { Schema } from 'joi';

enum ValidationType {
  Body = 'body',
  Query = 'query',
}

const validate = (schema: Schema, location: ValidationType = ValidationType.Body) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[location]; // Use the specified location (body, query)

    const validation = schema.validate(data, { abortEarly: false });

    if (validation.error) {
      const errors = validation.error.details.map((detail) => detail.message);
      return res.status(400).json({ ...responses["100"](), error: errors });
    }
    //if validation success.
    next();
  };
};

export { validate, ValidationType };
