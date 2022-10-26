import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SFormsService } from '../s-forms.service';
import { FormsModel } from '../forms-model';

@Component({
  selector: 'app-form-libre2',
  templateUrl: './form-libre2.component.html',
  styleUrls: ['./form-libre2.component.scss']
})
export class FormLibre2Component implements OnInit {

  qrcode :FormsModel={nom:[''],phone:[0],prenom:[''],adresse:[''],email:[''],ville:[''],nomQr:'',user:''};
 id!:string
    constructor(private formsServ:SFormsService, private activeRoute:ActivatedRoute) { }
  
    ngOnInit(): void {
      
      // this.id=localStorage.getItem('idqr')+''
      this.id=this.activeRoute.snapshot.params['id']
      this.affiche(this.id);
      // this.affQr()

  
    }
    affiche(id:string){
      
      console.log('iddd2222',id);
      
        this.formsServ.getQrCode(id+'').subscribe(data=>{this.qrcode=data,console.log("djkfgdsg",this.qrcode);
  
    });
    
    }
    // affQr(){
    //   let id = localStorage.getItem('id')
    // this.value = 'http://192.168.100.12:4200/content/affiche/'+id;
    // let qrResult =  this.value
    // }
    
}

