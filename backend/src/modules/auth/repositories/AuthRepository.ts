import { UserRepository } from "../../users/repositories/UserRepository";

export class AuthRepository {
  private repository =
    new UserRepository();

  async findByEmail(email: string) {
    return this.repository.findByEmail(
      email
    );
  }

  async findById(id: string) {
    return this.repository.findById(id);
  }
}