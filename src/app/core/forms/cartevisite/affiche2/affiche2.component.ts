import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartevisiteService } from '../cartevisite.service';
import { Catremodel } from '../catremodel';

@Component({
  selector: 'app-affiche2',
  templateUrl: './affiche2.component.html',
  styleUrls: ['./affiche2.component.scss']
})
export class Affiche2Component implements OnInit {

  qrcode :Catremodel={nom:[''],phone:[0],prenom:[''],adresse:[''],email:[''],ville:[''],nomQr:'',user:''};
 id!:string
    constructor(private contentServ:CartevisiteService, private activeRoute:ActivatedRoute) { }
  
    ngOnInit(): void {
      
      // this.id=localStorage.getItem('idqr')+''
      this.id=this.activeRoute.snapshot.params['id']
      this.affiche(this.id);
      // this.affQr()

  
    }
    affiche(id:string){
      
      console.log('iddd2222',id);
      
        this.contentServ.getQrCode(id+'').subscribe(data=>{this.qrcode=data,console.log("djkfgdsg",this.qrcode);
  
    });
    
    }
    // affQr(){
    //   let id = localStorage.getItem('id')
    // this.value = 'http://192.168.100.12:4200/content/affiche/'+id;
    // let qrResult =  this.value
    // }
    
}
