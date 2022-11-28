import { Component } from '@angular/core';

@Component({
  selector: 'app-main-accordion',
  templateUrl: './main-accordion.component.html',
  styleUrls: ['./main-accordion.component.scss']
})
export class MainAccordionComponent {
  public index: number|null = null;
  public activeState: boolean[] = [false, false, false];
}
