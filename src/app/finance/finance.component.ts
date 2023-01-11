import {Component, ViewChild} from '@angular/core';
import * as LuigiClient from "@luigi-project/client";
import {SplitterComponent, SplitterSplitPaneComponent} from "@fundamental-ngx/core";

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent {
  ngOnInit() {
    setTimeout(() => {
      LuigiClient.luigiClientInit();
    }, 2000);
  }

  @ViewChild(SplitterComponent)
  splitter: SplitterComponent | undefined;

  @ViewChild('paneTwo')
  paneTwo: SplitterSplitPaneComponent | undefined;

  hidePaneTwo(): void {
    // @ts-ignore
    this.splitter.hidePaneFromCanvas(this.paneTwo.id);

    // Also can be used

    // @ts-ignore
    this.paneTwo.hideFromCanvas();
  }

  showPaneTwo(): void {
    // @ts-ignore
    this.paneTwo.showOnCanvas();

    // Also can be used

    // @ts-ignore
    this.splitter.showPaneOnCanvas(this.paneTwo.id);
  }
}
