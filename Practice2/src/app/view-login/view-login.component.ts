import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.css']
})
export class ViewLoginComponent implements OnInit{

  logins!:Login[];
  successMsg!:string;
  constructor(private service:LoginService,private router:Router) {

  }

  ngOnInit(): void {
    this.getAllLogins();
  }

  getAllLogins(){
    this.service.getAllLogins().subscribe(res=>{
      this.logins=res;
    });
  }

  delete(id:number){
    this.service.deleteById(id).subscribe(res=>{
      this.successMsg=`data is deleted successfully ` + id;
      this.getAllLogins();
    });
  }


  updateLogin(id:number){
    let a=this.router.navigate(['/updatelogin',id]);
    console.log(a);

  }

}
