import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-fighter-details',
  templateUrl: './fighter-details.component.html',
  styleUrls: ['./fighter-details.component.scss']
})
export class FighterDetailsComponent {

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
