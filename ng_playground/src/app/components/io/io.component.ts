import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-io',
  imports: [],
  templateUrl: './io.component.html',
  styleUrl: './io.component.css'
})
export class IoComponent {
  @Input() inp: { title: string, rating: number} | null = null;
  @Output() out = new EventEmitter<{ comment: string, read: boolean }>();
  read: boolean = false;

  sendOutput = () => {
    this.out.emit({
      comment: 'I have watched this movie',
      read: this.read
    })
  }

  toggleRead = () => {
    this.read = !this.read
    this.out.emit({
      comment: 'I have watched this movie',
      read: this.read
    })
  }
}
