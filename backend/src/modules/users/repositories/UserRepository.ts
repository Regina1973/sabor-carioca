import users from "../../../database/users.json";

export class UserRepository {
  async findByEmail(email: string) {
    return users.find(
      (user) => user.email === email
    );
  }

  async findById(id: string) {
    return users.find(
      (user) => user.id === id
    );
  }
}