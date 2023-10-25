export class Fighter {
  private _id: number;
  private _firstName: string;
  private _name: string;
  private _age: number;
  private _weight: number;
  private _height: number;
  private _reach: number;
  private _nbWin: number;
  private _nbLose: number;


  constructor(id: number, firstName: string, name: string, age: number, weight: number, height: number, reach: number, nbWin: number, nbLose: number) {
    this._id = id;
    this._firstName = firstName;
    this._name = name;
    this._age = age;
    this._weight = weight;
    this._height = height;
    this._reach = reach;
    this._nbWin = nbWin;
    this._nbLose = nbLose;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get reach(): number {
    return this._reach;
  }

  set reach(value: number) {
    this._reach = value;
  }

  get nbWin(): number {
    return this._nbWin;
  }

  set nbWin(value: number) {
    this._nbWin = value;
  }

  get nbLose(): number {
    return this._nbLose;
  }

  set nbLose(value: number) {
    this._nbLose = value;
  }
}
