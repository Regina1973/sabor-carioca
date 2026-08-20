import { UserModel } from "../../users/schemas/UserSchema";

export class AuthRepository {
  async findByEmail(email: string) {
    return await UserModel.findOne({
      email,
    });
  }

  async findById(id: string) {
    return await UserModel.findById(id);
  }
}