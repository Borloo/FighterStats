import { Injectable } from '@angular/core';
import { CategoryService } from '../category/category.service';

import { Fighter } from './fighter.model';



@Injectable({
  providedIn: 'root'
})
export class FighterService {

  fighterList: Array<Fighter> = [];
  constructor(private categoryService: CategoryService) {
    this.initFightersList(this.fighterList)
  }

  initFightersList(fighterList: Array<Fighter>): void{
    fighterList.push(new Fighter(1,"prenom1", "nom1", 30, 30.00, 30.00, 3.00, 1,0,'M', categoryService.getCategoryById(1)))
    fighterList.push(new Fighter(2,"prenom2", "nom2", 30, 31.00, 31.00, 4.00, 2,1,'M', categoryService.getCategoryById(2)))
    fighterList.push(new Fighter(3,"prenom3", "nom3", 30, 32.00, 32.00, 5.00, 3,2,'M', categoryService.getCategoryById(3)))
    fighterList.push(new Fighter(4,"prenom4", "nom4", 30, 33.00, 33.00, 6.00, 4,3,'M', categoryService.getCategoryById(4)))
    fighterList.push(new Fighter(5,"prenom5", "nom5", 30, 34.00, 34.00, 7.00, 5,4,'M', categoryService.getCategoryById(5)))
    fighterList.push(new Fighter(6,"prenom6", "nom6", 30, 35.00, 35.00, 8.00, 6,5,'M', categoryService.getCategoryById(6)))
  }

}
