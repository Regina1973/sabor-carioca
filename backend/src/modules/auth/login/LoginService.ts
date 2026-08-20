export class LoginService {

  constructor(
    private repository: AuthRepository
  ) {}

  async execute(
    email: string,
    password: string
  ) {

    const user =
      await this.repository
        .findByEmail(email);

    if (!user) {
      throw new Error(
        "Usuário não encontrado"
      );
    }

    return user;

  }

}