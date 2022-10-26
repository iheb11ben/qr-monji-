import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Route, Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
   
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url=environment.baseUrl+'api/v1'
  token: any;
  
  constructor(private httpClient:HttpClient,private route:Router) { }

  login(email:string,password:string):Observable<any>{
    return this.httpClient.post<any>(`${this.url}/login`,{email,password})

}
updateUser(user:User,id:string):Observable<User[]>{
return this.httpClient.patch<User[]>(`${this.url}/${id}`,user)
}
getUserBYIDService(id:string):Observable<User>{
  return this.httpClient.get<User>(`${this.url}/${id}`)
}
register (user:User):Observable<User>{
  console.log(user);
  return this.httpClient.post<User>(`${this.url}/register`,user)
}
 isLogin():boolean{
 this.token=localStorage.getItem('role')
  if (this.token==='user') {
    
   return true
  } 
  else{
    this.route.navigate(['/'])
   return false
  }
  }
}