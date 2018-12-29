import { BaseModel, schemaOptions } from '../../shared/base.model';
import { ModelType, prop } from 'typegoose';
import { UserRole } from './user-role.enums';

export class User extends BaseModel {
  @prop({ required: [true, 'Username is required'], minlength: [6, 'Must be at least 6'], unique: true})
  username: string;
  @prop({ required: [true, 'Password is required'], minlength: [6, 'Must be at least 6'] })
  password: string;
  @prop({ enum: UserRole, default: UserRole.User })
  role?: UserRole;
  @prop()
  firstName?: string;
  @prop()
  lastName?: string;

  get fullName(): string{
    return `${this.firstName} ${this.lastName}`;
  }

  static get model(): ModelType<User> {
    return new User().getModelForClass(User, { schemaOptions });
  }

  static get modelName(): string {
    return this.model.modelName;
  }
}
