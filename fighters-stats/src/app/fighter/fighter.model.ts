import {Category} from "../category/category.model";

export class Fighter {
  _id: number;
  _firstName: string;
  _name: string;
  _age: number;
  _weight: number;
  _height: number;
  _reach: number;
  _nbWin: number;
  _nbLose: number;
  _sexe: string;
  _category: Category | null;


  constructor(id: number, firstName: string, name: string, age: number, weight: number, height: number, reach: number, nbWin: number, nbLose: number, sexe: string, category: Category | null) {
    this._id = id;
    this._firstName = firstName;
    this._name = name;
    this._age = age;
    this._weight = weight;
    this._height = height;
    this._reach = reach;
    this._nbWin = nbWin;
    this._nbLose = nbLose;
    this._sexe = sexe;
    this._category = category;
  }

}
