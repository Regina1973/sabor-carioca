import { UserModel }
from "../../../modules/users/schemas/UserSchema";

export class AuthRepository {

  async findByEmail(email: string) {

    return await UserModel.findOne({
      email
    });

  }

  async findById(id: string) {

    return await UserModel.findById(id);

  }

}

/*
export class AuthRepository {

  async findByEmail(
    email: string
  ) {

    // mongoose depois

    return null;
  }

}*/