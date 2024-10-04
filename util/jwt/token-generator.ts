import { sign } from 'jsonwebtoken';
import { TokenGenerator, tokenGenerator } from './token-auth';

class JwtGenerator implements TokenGenerator<string> {
  generate(payload: object, options: object): string {
    //TODO: Replace "1234" with cryp key
    const token = sign(payload, '1234', options);
    return token;
  }
}

export const jwtGenerator = tokenGenerator<string, JwtGenerator>(JwtGenerator);
