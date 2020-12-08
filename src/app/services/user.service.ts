import {User} from '../user';
import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable()
export class UserService {

  constructor(
      private loggingService: LoggingService) {
  }

  userList = [
    new User(1, 'Web programming', 'Beginner', 'Duman Serikbaev', '1 year', '50$'),
    new User(2, 'Java Developer', 'Beginner', 'Elzhan Rustem', '1 year', '60$'),
    new User(3, 'Angular Developer', 'Inter', 'Karina Syuingaraeva', '2 year', '100$'),
  ];


  getUsers() {
    this.loggingService.log('List of users: ' + this.userList);
    return this.userList;
  }

}
