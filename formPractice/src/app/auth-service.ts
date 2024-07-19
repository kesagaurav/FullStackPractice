export class AuthService {
  loggedIn=false;

  isAutenticated(){
    this.loggedIn=true;
    return this.loggedIn;
  }

  login(){
    this.loggedIn=true;
  }

  logout(){
    this.loggedIn=false;
  }
}
