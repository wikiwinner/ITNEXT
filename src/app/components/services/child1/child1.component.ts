import {Component, Input, OnInit} from '@angular/core';
import {LoggingService} from '../../../services/logging.service';
import {User} from '../../../user';
import {UserService} from '../../../services/user.service';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private SharedService: UserService, private Logging: LoggingService) {
    // this.userService = new UserService();
  }

  @Input()
  userList: User[];

  getUsers() {
    this.userList = this.SharedService.getUsers();
  }

  deleteUser(user: User){
    this.userList.splice(this.userList.indexOf(user) ,1);
    this.Logging.log(user.course + ' deleted');
  }


  ngOnInit(): void {
  }

}











