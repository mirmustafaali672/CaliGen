export interface TokenIntrospectResponseInterface {
  active: boolean;
  iss: string;
  sub: string;
  jti: string;
  token_type: string;
  token_usage: string;
  client_id: string;
  iat: number;
  nbf: number;
  exp: number;
  aud: string;
}

export interface TokenIntrospectRequestInterface {
  token: string;
  client_id: string;
}
