import { Injectable } from '@angular/core';
import { User } from './share/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      name: "Giocomo Gulizzani Founder",
      id: 1,
      age: 40,
      nickName: "Peldi",
      employee: true
    },
    {
      name: "Marco Botton Tuttofare",
      id: 2,
      age: 38,
      nickName: "P",
      employee: true

    }];
  // user: User;
  constructor() {
  }
  create(user: User) {
    const itemIndex = this.users.length;
    user.id = this.getnextId();
    console.log(user);
    this.users[itemIndex] = user;
  }

  delete(user: User) {
    this.users.splice(this.users.indexOf(user), 1);
  }

  update(user: User) {
    const itemIndex = this.users.findIndex(item => item.id === user.id);
    console.log(itemIndex);
    this.users[itemIndex] = user;
  }

  getall(): User[] {
    console.log('userservice:getall');
    console.log(this.users);
    return this.users;
  }

  reorderusers(user: User) {
    this.users = this.users
      .map(uc => uc.id === user.id ? user : uc)
      .sort((a, uc) => uc.id - uc.id);
  }

  getUserById(id: number) {
    console.log(id);
    const itemIndex = this.users.findIndex(item => item.id === id);
    console.log(itemIndex);
    return this.users[itemIndex];
  }

  getnextId(): number {
    let highest = 0;
    this.users.forEach(function (item) {
      if (highest === 0) {
        highest = item.id;
      }
      if (highest < item.id) {
        highest = item.id;
      }
    });
    return highest + 1;
  }
}
