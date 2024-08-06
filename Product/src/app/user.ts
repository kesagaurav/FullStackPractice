export class User {
  id!:number;
  username!:string;
  password!:string;
  constructor(private id1:number,private usernmae:string,private password1:string) {
      this.id=id1;
      this.username=usernmae;
      this.password=password1;
  }
}
