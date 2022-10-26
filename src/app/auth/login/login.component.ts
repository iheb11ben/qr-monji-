import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user! : User
email!:string
password!:string
  constructor(private authServ : UserService,private router:Router) { }

  ngOnInit(): void {
    localStorage.removeItem('role');
  }
  login(email:string,password:string){
    this.authServ.login(email,password).subscribe(data=>{
      this.user=data
      localStorage.setItem('role','user'),
      localStorage.setItem('idUser',data._id)
      this.router.navigate(['/core'])
    })
  }
}                             
