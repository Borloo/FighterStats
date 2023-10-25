import {Component, OnInit} from '@angular/core';
import {Fighter} from "./fighter.model";
import {FighterService} from "./fighter.service";

@Component({
  selector: 'app-fighter',
  templateUrl: './fighter.component.html',
  styleUrls: ['./fighter.component.scss']
})
export class FighterComponent implements OnInit{

  fightersList: Array<Fighter>|undefined

  constructor(private fighterService: FighterService) {
  }

  ngOnInit() {
    this.fighterService.getAllFighters().subscribe(resFighters => {
      this.fightersList = resFighters
    })
  }

}
