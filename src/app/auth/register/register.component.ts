import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authServ : UserService,private router:Router) { }
user:User={username:'',email:'',password:''}
  ngOnInit(): void {
  }
 register(){
  console.log(this.user);
  
    this.authServ.register(this.user).subscribe(data=>{
      this.user=data
      
      this.router.navigate(['/'])
    })
  } 
}

