import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];
  //create(createUserDto: CreateUserDto) {
  //  return 'This action adds a new user';
  //}
  //
  //findAll() {
  //  return `This action returns all users`;
  //}
  //
  //findOne(id: number) {
  //  return `This action returns a #${id} user`;
  //}
  //
  //update(id: number, updateUserDto: UpdateUserDto) {
  //  return `This action updates a #${id} user`;
  //}
  //
  //remove(id: number) {
  //  return `This action removes a #${id} user`;
  //}
}
