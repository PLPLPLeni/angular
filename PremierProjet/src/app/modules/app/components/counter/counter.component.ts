import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  @Input() public count?: number;

  @Output() public countChanged = new EventEmitter<number>();

  public increase(): void {
    if (this.count == null) {
      this.count = 0;
    }

    this.count++;

    this.countChanged.emit(this.count);
  }
}
