import { Injectable } from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})

export class MsgsServiceService {

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
    console.log(message);
  }

  clear() {
    this.messages = [];
  }

  addToLogging(message: string) {
    this.Logging.log(' and Decorated: ' + message);
  }

  constructor(private Logging: LoggingService) { }
}
