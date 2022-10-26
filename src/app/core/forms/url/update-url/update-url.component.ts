import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';
import { Url } from '../url';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-update-url',
  templateUrl: './update-url.component.html',
  styleUrls: ['./update-url.component.scss']
})
export class UpdateUrlComponent implements OnInit {

  constructor(private urlService:UrlService,private activeRoute:ActivatedRoute) { }
url:Url={url:'',user:''}
id=''
  ngOnInit(): void {
    let id =this.activeRoute.snapshot.params['id']
    this.urlService.getQrCode(id).subscribe(data=>{this.url=data;console.log(data);})
    this.affiche(this.id);  }
  update(){
    // console.log(localStorage.getItem('idqr'));
    this.url.user=localStorage.getItem('idUser')+'';
    this.urlService.updateQrCodebyIduser(localStorage.getItem('idqrUrl'),this.url).subscribe(data=>this.url=data[0])
    }
 
 
elementType = NgxQrcodeElementTypes.URL;
correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
value = 'http://192.168.100.52:4200/core/url/affiche';

    affiche(id:string){
       this.urlService.getQrCode(id+'').subscribe(data=>{this.url=data,console.log(data);
    });
    this.value = 'http://192.168.100.52:4200/core/url/affiche/'+id;
    }
  }

