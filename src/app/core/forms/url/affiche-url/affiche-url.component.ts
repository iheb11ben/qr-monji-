import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';
import { Url } from '../url';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-affiche-url',
  templateUrl: './affiche-url.component.html',
  styleUrls: ['./affiche-url.component.scss']
})
export class AfficheUrlComponent implements OnInit {

  constructor(private route:Router, private activeRoute:ActivatedRoute,private urlService:UrlService) { }
url:Url={url:'',user:''}
  id:string=''
elementType = NgxQrcodeElementTypes.URL;
correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
value = 'http://192.168.100.52:4200/core/url/affiche';
  ngOnInit(): void {
    this.id=this.activeRoute.snapshot.params['id']
      console.log("id url",this.id);  
      this.affiche(this.id);
    }
    affiche(id:string){
      this.route.navigate(['/core/url/affiche/'+id])
        this.urlService.getQrCode(id+'').subscribe(data=>{this.url=data,console.log(data);
    });
    this.value = 'http://192.168.100.52:4200/core/url/affiche/'+id;
    }
  }


