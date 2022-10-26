import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from './url';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  baseurl='http://192.168.100.11:3000/url'
  constructor(private httpclient:HttpClient) { }
  createQrCode(url:Url):Observable<any>{
    return this.httpclient.post<any>(this.baseurl+'/',url)
      }
      getQrCode(id:string):Observable<any>{
        return this.httpclient.get<Url>(this.baseurl+'/'+id)
          }
        getQrCodebyIduser(id:string):Observable<any[]>{
        return this.httpclient.get<Url[]>(this.baseurl+'/user/'+id)
          }
          updateQrCodebyIduser(id:any,data:Url):Observable<any[]>{
            console.log('idservice',id);
            
            return this.httpclient.patch<Url[]>(this.baseurl+'/update/'+id,data)
              }
delete(id:string):Observable<any>{
  return this.httpclient.delete<any>(this.baseurl+'/'+id)
}
}
