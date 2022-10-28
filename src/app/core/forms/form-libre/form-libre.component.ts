import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModel } from '../forms-model';
import { SFormsService } from '../s-forms.service';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';

@Component({
  selector: 'app-form-libre',
  templateUrl: './form-libre.component.html',
  styleUrls: ['./form-libre.component.scss']
})
export class FormLibreComponent implements OnInit {
  qrcode :FormsModel={choix:[{key:"",value:""}],nom:[''],phone:[0],prenom:[''],adresse:[''],email:[''],ville:[''],user:'',nomQr:''};
  
  id:string='';
  type!:string;
      elementType = NgxQrcodeElementTypes.URL;
      correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
      value = 'http://192.168.100.11:4200/core/carte/affichefinal';
  
      constructor(private sFormsServ:SFormsService, private activeRoute:ActivatedRoute,private route:Router) { }
    
      ngOnInit(): void {
      
        // this.id = localStorage.getItem('id')+''
        this.id=localStorage.getItem('idform')+''
        this.affiche(this.id);
        // this.affQr()
        this.type=localStorage.getItem("type")+''
        console.log("type=",this.type);
        
  
    
      }
      affiche(id:string){
        this.route.navigate(['/core/form/affiche/'+id])
        
     console.log('iddddd',id);
     
          this.sFormsServ.getQrCode(id+'').subscribe(data=>{this.qrcode=data,console.log("data",this.qrcode);
          console.log("formsdata",this.qrcode);
      });
      this.value = 'http://192.168.100.11:4200/core/form/affichefinal/'+id;
      }
      
      
    
  }