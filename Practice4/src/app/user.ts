export class User {
  id!:number;
  name!:string;
  password!:string;

  constructor(private id1:number,private name1:string,private password1:string) {
    this.id=id1;
    this.name=name1;
    this.password=password1;
  }
}
