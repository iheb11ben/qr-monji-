import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/service/user.service';
import { User } from 'src/app/auth/user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
id:any
user:any={username:'',password:'',email:'',role:''}
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUserBYID()
  }
getUserBYID(){
  this.id=localStorage.getItem('idUser')
  console.log(this.id);
  
  this.userService.getUserBYIDService(this.id).subscribe(data=>{this.user=data;console.log(this.user.user.username);
  })
}
}