import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Fighter} from "./fighter.model";

@Component({
  selector: 'app-fighter',
  templateUrl: './fighter.component.html',
  styleUrls: ['./fighter.component.scss']
})
export class FighterComponent {

    @Input()
    model: Fighter | null = null;
    @Output()
    emitFighter: EventEmitter<Fighter> = new EventEmitter<Fighter>();
    constructor() {
    }

    ngOnInit(){

    }


}
