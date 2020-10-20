import { Component, OnInit, Input } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {

  @Input('value') value;
  @Input('color') color;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    if(this.value) {
      this.elementRef.nativeElement.style.setProperty('--progress-value', this.value);
    }

    if(this.color) {
      this.elementRef.nativeElement.style.setProperty('--progress-color', this.color);
    }
  }

}
