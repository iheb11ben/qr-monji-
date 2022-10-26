import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormsModel } from './forms-model';
import { SFormsService } from './s-forms.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  qrcode:FormsModel={nomQr:'',  nom:[{value:""}],phone:[{value:0}],prenom:[{value:""}],adresse:[{value:""}],email:[{value:""}],ville:[{value:""}],user:''};
Qr:FormsModel={nomQr:'',  nom:[{value:""}],phone:[{value:0}],prenom:[{value:""}],adresse:[{value:""}],email:[{value:""}],ville:[{value:""}],user:''};
Qr2:FormsModel={nomQr:'',nom:[{value:""}],phone:[{value:0}],prenom:[{value:""}],adresse:[{value:""}],email:[{value:""}],ville:[{value:""}],user:''};
// phones:number[]=[0,0];
phones:{value:number}[]=[]
phone!:number;
// ligne!:string
// public myAngularxQrCode!: string ;

  constructor(private formsServ:SFormsService,private activate:ActivatedRoute,private router:Router) { 
    // this.myAngularxQrCode = '';
  }

  ngOnInit(): void {
  
this.Qr.user=localStorage.getItem('idUser')+''
console.log('iduser',this.Qr.user);

  }
  submit(){
    this.formsServ.createQrCode(this.Qr).subscribe(data=>{
      console.log(data);
      localStorage.setItem('id',data._id)
      localStorage.setItem('idqr',data._id)
      console.log('/core/carte/affiche/'+data._id);
      
      this.router.navigate(['/core/carte/affiche/'+data._id])
    });
    
}
 
  // affiche(){
  //  return this.contentServ.getQrCode().subscribe(data=>this.qrcode=data)
  // }
  addphone(ligne:any){
    console.log(ligne);
    
  if(ligne === "phone"){
    this.phones.push({value:0})
    this.Qr.phone=this.phones}
    else if (ligne === "email"){
      
      this.Qr.email.push({value:''})
      console.log(this.Qr.email);
    }else if (ligne === "adresse"){
      
      this.Qr.adresse.push({value:''})
      console.log(this.Qr.adresse);
    }
  }
  remove(i:number,name:string){
    if(name === 'phone'){
    this.Qr.phone.splice(i,1);
    }
    else if(name === 'email'){
      this.Qr.email.splice(i,1);
    }
  }

}
