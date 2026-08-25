import { Request, Response } from "express";

import { loginSchema } from "./LoginSchema";
import { LoginService } from "./LoginService";

export class LoginController {
  private loginService =
    new LoginService();

  async handle(
    req: Request,
    res: Response
  ) {
    try {
      const { email, password } =
        loginSchema.parse(req.body);

      const result =
        await this.loginService.execute(
          email,
          password
        );

      return res.status(200).json(result);

    } catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error
            ? error.message
            : "Erro interno"
      });
    }
  }
}