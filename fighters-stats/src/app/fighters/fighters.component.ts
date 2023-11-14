import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {Fighter} from "../models/fighter";
import {FighterService} from "../fighter/fighter.service";

@Component({
  selector: 'app-fighters',
  templateUrl: './fighters.component.html',
  styleUrls: ['./fighters.component.scss']
})
export class FightersComponent implements OnInit, OnDestroy{

  errorMessage: string = '';
  sub!: Subscription;

  fighters: Fighter[] = [];

  constructor(private fighterService: FighterService) { }

  ngOnInit(): void {
    this.sub = this.fighterService.getAllFighters().subscribe({
      next: fighters => {
        this.fighters = fighters;
      },
      error:err =>this.errorMessage = err
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
