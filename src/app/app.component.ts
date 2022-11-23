import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'picaresque';
  public index: number|null = null;
  public activeState: boolean[] = [false, false, false];


  public onMouseLeave():void {
    this.index = null
  }
}
