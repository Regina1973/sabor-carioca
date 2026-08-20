import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { AuthRepository }
from "../repositories/AuthRepository";

export class LoginService {

  private repository =
    new AuthRepository();

  async execute(
    email: string,
    password: string
  ) {

    const user =
      await this.repository
      .findByEmail(email);

    if (!user) {
      throw new Error(
        "Credenciais inválidas"
      );
    }

    const passwordMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!passwordMatch) {
      throw new Error(
        "Credenciais inválidas"
      );
    }

    const token = jwt.sign(
      {
        userId: user.id,
        role: user.role
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1d"
      }
    );

    return {
      user,
      token
    };
  }

}