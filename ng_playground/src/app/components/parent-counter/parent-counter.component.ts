import { Component } from '@angular/core';
import { ChildCounterComponent } from '../child-counter/child-counter.component';
import { UserComponent } from '../user/user.component';
import { CheckerComponent } from "../checker/checker.component";

@Component({
  selector: 'app-parent-counter',
  imports: [ChildCounterComponent, UserComponent, CheckerComponent],
  templateUrl: './parent-counter.component.html',
  styleUrl: './parent-counter.component.css'
})
export class ParentCounterComponent {
  count = 0;
  user = {id: 7248289, firstName: 'Melisa', lastName:"Akinyi", birthday: new Date(14/7/2007)};

  increment = () => {
    this.count++;
  }

  decrement = () => {
    this.count--;
  }

  updateUser(){
    this.user = {...this.user, lastName: "Marvelline"}
  }
}
