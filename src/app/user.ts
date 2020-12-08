export class User {
   private _id: number;
   private _course: string;
   private _level: string;
   private _author: string;
   private _training: string;
   private _price: string;

  constructor(id: number, course: string, level: string, author: string, training: string, price: string){
      this._id = id;
      this._course = course;
      this._level = level;
      this._author = author;
      this._training = training;
      this._price = price;
  }
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get training(): string {
    return this._training;
  }

  set training(value: string) {
    this._training = value;
  }

  get course(): string {
    return this._course;
  }

  set course(value: string) {
    this._course = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get price(): string {
    return this._price;
  }

  set price(value: string) {
    this._price = value;
  }

  get level(): string {
    return this._level;
  }

  set level(value: string) {
    this._level = value;
  }
}
