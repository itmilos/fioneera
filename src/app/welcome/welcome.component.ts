import {ChangeDetectorRef, Component} from '@angular/core';
import {addContextUpdateListener, addInitListener} from "@luigi-project/client";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  public message: string | undefined;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {
    addInitListener(initialContext => {
      this.message = 'Luigi Client initialized.';
      // @ts-ignore
      if (!this.ref['destroyed']) {
        this.ref.detectChanges();
      }
    });
    addContextUpdateListener(updatedContext => {
      this.message = 'Luigi Client updated.';
      // @ts-ignore
      if (!this.ref['destroyed']) {
        this.ref.detectChanges();
      }
    });
  }
}
