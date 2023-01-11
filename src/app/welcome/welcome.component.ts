import {Component} from '@angular/core';
import {MessageToastService} from "@fundamental-ngx/core";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(public infoMsg: MessageToastService) {
  }

  ngOnInit(): void {
    this.infoMsg.open('Welcome to Fioneera App!');

    setTimeout(() => {
      this.infoMsg.hideAll()
    }, 2500);
  }
}
