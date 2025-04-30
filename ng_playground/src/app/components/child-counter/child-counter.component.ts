import { Component, Input, OnChanges, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-counter',
  imports: [],
  templateUrl: './child-counter.component.html',
  styleUrl: './child-counter.component.css'
})
export class ChildCounterComponent implements OnChanges {
  @Input() counter!:number;
  change = signal<{previous: number | null, current: number | null, first: boolean | null}>({ previous: null, current: null, first: null});

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Changes detected in Input - Counter`);
    if(changes['counter']){
      this.change.set({
        previous: changes['counter'].previousValue,
        current: changes['counter'].currentValue,
        first: changes['counter'].firstChange
      })
    }
  }
}
