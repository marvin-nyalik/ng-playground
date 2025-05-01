import { NgFor, NgIf } from '@angular/common';
import { Component, DoCheck, OnInit, KeyValueDiffer, KeyValueDiffers } from '@angular/core';

@Component({
  selector: 'app-checker',
  imports: [NgFor, NgIf],
  templateUrl: './checker.component.html',
  styleUrl: './checker.component.css'
})
export class CheckerComponent implements DoCheck, OnInit {
  person = { name: 'Siin Biin', age: 30, occupation: 'Banker' }
  private differ!: KeyValueDiffer<string, any>
  allChanges: any[] = [];

  constructor(private keyValueDiffers: KeyValueDiffers){}

  ngOnInit(): void {
    this.differ = this.keyValueDiffers.find(this.person).create()
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.person)
    changes?.forEachAddedItem(record => {
      this.allChanges.push(record)
      console.log('Added key:', record.key, 'Value is', record.currentValue);
    })

    changes?.forEachChangedItem(record => {
      console.log('Changed key:', record.key, 'from', record.previousValue, 'to', record.currentValue);
    })

    changes?.forEachRemovedItem(record => {
      this.allChanges.push(record)
      console.log('Removed key:', record.key, ' was', record.previousValue);
    })    
  }

  changePerson() {
    this.person.name = 'Saan Baan'
    delete (this.person as any).occupation;
    (this.person as any).country = 'Ethiopia'
  }
}
