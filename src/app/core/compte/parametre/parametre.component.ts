import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/auth/service/user.service';
import { User } from 'src/app/auth/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.scss']
})
export class ParametreComponent implements OnInit {
id:any

users:User={username:'',password:'',email:'',role:''}
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users={username:'',password:'',email:'',role:''}
    this.getUserBYID()
  }
updateUser(){
  this.id=localStorage.getItem('idUser')

  return this.userService.updateUser(this.users,this.id).subscribe(data=>{
    })
   
}
getUserBYID(){
  this.id=localStorage.getItem('idUser')
  console.log(this.id);
  
  this.userService.getUserBYIDService(this.id).subscribe(data=>{this.users=data;console.log(this.users);
  })
}
alertWithSuccess(){
  Swal.fire('Félicitation !!', 'Votre Compte est Modifié', 'success')
}
}