import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
  @Input() message: string = "";
  @Output() response = new EventEmitter<string>();

  responseValue = () => {
    this.response.emit('I have been clicked')
  }
}
