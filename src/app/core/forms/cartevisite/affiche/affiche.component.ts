import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartevisiteService } from '../cartevisite.service';
import { Catremodel } from '../catremodel';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';

@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.component.html',
  styleUrls: ['./affiche.component.scss']
})
export class AfficheComponent implements OnInit {

  qrcode :Catremodel={nom:[''],phone:[0],prenom:[''],adresse:[''],email:[''],ville:[''],user:'',nomQr:''};
 
id:string=''
    elementType = NgxQrcodeElementTypes.URL;
    correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    value = 'http://192.168.100.11:4200/core/carte/affichefinal';

    constructor(private contentServ:CartevisiteService, private activeRoute:ActivatedRoute,private route:Router) { }
  
    ngOnInit(): void {
    
      // this.id = localStorage.getItem('id')+''
      this.id=localStorage.getItem('id')+''
      this.affiche(this.id);
      // this.affQr()

  
    }
    affiche(id:string){
      this.route.navigate(['/core/carte/affiche/'+id])
      
   console.log('iddddd',id);
   
        this.contentServ.getQrCode(id+'').subscribe(data=>{this.qrcode=data,console.log("data",this.qrcode);
  
    });
    this.value = 'http://192.168.100.11:4200/core/carte/affichefinal/'+id;
    }
    
    
  
}
