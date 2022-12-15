import { Component } from '@angular/core';
import { MessagingService } from 'src/app/messaging.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent {

  constructor(public messagingService: MessagingService){}
}
