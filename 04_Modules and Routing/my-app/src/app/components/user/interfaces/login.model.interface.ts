export interface UserModel {
  username: string;
  password: string;
  faction: string
}

export interface LoginResponse {
  id_token: string;
}
