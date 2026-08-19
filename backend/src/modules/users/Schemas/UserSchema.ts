import { UserModel } from "../../users/schemas/UserSchema";

export class AuthRepository {
  
  async findByEmail(email: string) {
    return await UserModel.findOne({
      email,
      active: true
    });
  }

  async findById(id: string) {
    return await UserModel.findById(id);
  }

}