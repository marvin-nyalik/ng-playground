import { Component } from '@angular/core';
import { ChildCounterComponent } from '../child-counter/child-counter.component';

@Component({
  selector: 'app-parent-counter',
  imports: [ChildCounterComponent],
  templateUrl: './parent-counter.component.html',
  styleUrl: './parent-counter.component.css'
})
export class ParentCounterComponent {
  count = 0;

  increment = () => {
    this.count++;
  }

  decrement = () => {
    this.count--;
  }
}
