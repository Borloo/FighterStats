import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Fighter} from "../fighter.model";

@Component({
  selector: 'app-fighter-details',
  templateUrl: './fighter-details.component.html',
  styleUrls: ['./fighter-details.component.scss']
})
export class FighterDetailsComponent {

  @Input()
  model: Fighter | null = null;
  @Output()
  emitFighter: EventEmitter<Fighter> = new EventEmitter<Fighter>();

  fighterForm = this.fb.group({
    firstName: [''],
    name: [''],
    age: [''],
    weight: [''],
    height: [''],
    reach: [''],
    nbWin: [''],
    nbLose: [''],
    sexe: [''],
    category: ['']
  })
  constructor(private fb: FormBuilder) {
  }
}
