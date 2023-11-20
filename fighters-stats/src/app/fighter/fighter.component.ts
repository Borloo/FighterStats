import {Component, Input} from '@angular/core';
import {Fighter} from "../models/fighter";

@Component({
  selector: 'app-fighter',
  templateUrl: './fighter.component.html',
  styleUrls: ['./fighter.component.scss']
})
export class FighterComponent {

  @Input() fighter!: Fighter;

}
