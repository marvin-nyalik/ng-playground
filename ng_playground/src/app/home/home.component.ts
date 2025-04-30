import { Component, signal } from '@angular/core';
import { GreetingComponent } from "../components/greeting/greeting.component";
import { IoComponent } from "../components/io/io.component";
import { NgClass } from '@angular/common';
import { ParentCounterComponent } from '../components/parent-counter/parent-counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, IoComponent, NgClass, ParentCounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeMessage = signal('');
  dataFromIO = signal<{ comment: string, read: boolean }>({ comment: '', read: false })

  handleDataFromIO = (data: { comment: string, read: boolean }) => {
    this.dataFromIO.set(data);
  }

  inputForIO = {
    title: 'Black Widow',
    rating: 8.9
  }

  receiveMessage(msg: string) {
    this.homeMessage.set(`From Child: ${msg}`)
  }
}
