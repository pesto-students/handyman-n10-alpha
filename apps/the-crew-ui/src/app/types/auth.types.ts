export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  expiresAt?: Date;
};

export type RefreshTokenResponse = LoginResponse;

export type AuthCreds = {
  email: string;
  password: string;
};
