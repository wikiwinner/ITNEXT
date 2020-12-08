import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../user';
import {UserService} from '../../../services/user.service';
import {LoggingService} from '../../../services/logging.service';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private LoggingService: LoggingService, private SharedUsers: UserService) { }

  @Input()
  userList: User[];

  id: number;
  course: string;
  level: string;
  author: string;
  training: string;
  price: string;

  ngOnInit(): void {
  }
  getUsers() {
    this.userList = this.SharedUsers.userList;
  }

  addUser(id: number, course: string, level: string, author: string, training: string, price: string) {
    this.getUsers();
    this.SharedUsers.userList.push(new User(id, course, level, author, training, price));
    this.LoggingService.log(this.course + ' added!');
  }

}
