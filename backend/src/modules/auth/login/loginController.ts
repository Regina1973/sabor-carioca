import { Request, Response } from "express";

import { LoginSchema } from "./LoginSchema";

export class LoginController {
  async handle(
    req: Request,
    res: Response
  ) {
    const data = LoginSchema.parse(
      req.body
    );

    return res.status(200).json({
      message: "Dados válidos",
      data,
    });
  }
}