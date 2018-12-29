import { UserRole } from '../../user/models/user-role.enums';

export interface JwtPayload {
  username: string;
  role: UserRole;
  iat?: Date;
}
