import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormsModel } from './forms-model';

@Injectable({
  providedIn: 'root'
})
export class SFormsService {
baseurl='http://192.168.100.11:3000/content'
constructor(private httpclient: HttpClient) { }

createQrCode(data:FormsModel):Observable<any>{
return this.httpclient.post<any>(this.baseurl+'/',data)
}
getQrCode(id:string):Observable<any>{
return this.httpclient.get<FormsModel>(this.baseurl+'/affiche/'+id)
}
getQrCodebyIduser(id:string):Observable<any[]>{
return this.httpclient.get<FormsModel[]>(this.baseurl+'/afficheUser/'+id)
}

}
