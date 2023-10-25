import {Fighter} from './fighter.model';

export class Category {
  private _id: number;
  private _name: string;
  private _min_weight: number;
  private _max_weight: number;
  private _champion: Fighter;

  constructor(id: number, name: string, min_weight: number,
              max_weight: number, champion: number) {
    this._id = id;
    this._name = name;
    this._min_weight = min_weight;
    this._max_weight = max_weight;
    this._champion = champion;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get min_weight(): number {
    return this._min_weight;
  }

  set min_weight(value: number) {
    this._min_weight = value;
  }

  get max_weight(): number {
    return this._max_weight;
  }

  set max_weight(value: number) {
    this._max_weight = value;
  }

  get champion(): Fighter {
    return this._champion;
  }

  set champion(value: Fighter) {
    this._champion = value;
  }
}
