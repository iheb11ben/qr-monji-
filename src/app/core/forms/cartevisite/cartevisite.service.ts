import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catremodel } from './catremodel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartevisiteService {

  baseurl='http://192.168.100.11:3000/content'
  constructor(private httpclient: HttpClient) { }

  createQrCode(data:Catremodel):Observable<any>{
return this.httpclient.post<any>(this.baseurl+'/',data)
  }
getQrCode(id:string):Observable<any>{
return this.httpclient.get<Catremodel>(this.baseurl+'/affiche/'+id)
  }
getQrCodebyIduser(id:string):Observable<any[]>{
return this.httpclient.get<Catremodel[]>(this.baseurl+'/afficheUser/'+id)
  }
  updateQrCodebyIduser(id:any,data:Catremodel):Observable<any[]>{
    console.log('idservice',id);
    
    return this.httpclient.patch<Catremodel[]>(this.baseurl+'/update/'+id,data)
      }
      delete(id:string):Observable<any>{
        return this.httpclient.delete<any>(this.baseurl+'/affiche/'+id)
      }
}
