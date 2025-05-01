import { Component, Input, OnChanges, OnInit, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnChanges, OnInit {
  @Input() user!: {id: number, firstName: string, lastName: string, birthday: Date}

  fullName = signal('');
  birthDate = signal('');

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['user'] && changes['user'].currentValue){
      this.processUser(changes['user'].currentValue)
    }
  }

  ngOnInit(): void {
    this.processUser(this.user)
  }

  private processUser (user:{id: number, firstName: string, lastName: string, birthday: Date}){
    this.fullName.set(`${user.firstName} ${user.lastName}`);
    this.birthDate.set(user.birthday.toLocaleDateString());
  }
}
