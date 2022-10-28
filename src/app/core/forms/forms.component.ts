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
  qrcode:FormsModel={nomQr:'',  nom:[{value:""}],phone:[{value:0}],prenom:[{value:""}],adresse:[{value:""}],email:[{value:""}],ville:[{value:""}],choix:[{}],user:''};
Qr:FormsModel={choix:[{key:"",value:"",value1:""}],nomQr:'',  nom:[{value:""}],phone:[{value:0}],prenom:[{value:""}],adresse:[{value:""}],email:[{value:""}],ville:[{value:""}],user:''};
Qr2:FormsModel={choix:[{key:"",value:""}],nomQr:'',nom:[{value:""}],phone:[{value:0}],prenom:[{value:""}],adresse:[{value:""}],email:[{value:""}],ville:[{value:""}],user:''};
// phones:number[]=[0,0];
phones:{value:number}[]=[]
phone!:number;
opt!:String;


  constructor(private formsServ:SFormsService,private activate:ActivatedRoute,private router:Router) { 
    // this.myAngularxQrCode = '';
  }

  ngOnInit(): void {
  
this.Qr.user=localStorage.getItem('idUser')+''
console.log('iduser',this.Qr.user);

  }
  
  submit(){
    this.formsServ.createQrCode(this.Qr).subscribe(data=>{
      console.log("forms data ",data);
      console.log("forms ",data._id);
      localStorage.setItem('idform',data._id)
      // localStorage.setItem('idqr',data._id)
      console.log('/core/form/affiche/'+data._id);
      
      this.router.navigate(['/core/form/affiche/'+data._id])
    });
    
}
 
  // affiche(){
  //  return this.contentServ.getQrCode().subscribe(data=>this.qrcode=data)
  // }
  addphone(type:String){
    if(type==="normale"){
      this.Qr.choix.push({key:"",value:""});
      // if(type==="speciale"){
      //   this.Qr.choix.concat({value1:""})
    
      // }
    }
    
 
 console.log(this.Qr.choix);

    
  }
  addType(){
   
    
   localStorage.setItem("type",this.opt+'')
 

    
  }
  addInput(ligne:any){
    console.log(ligne);
    
  if(ligne === "phone"){
    this.Qr.phone.push({value:0})
    }
    else if (ligne === "email"){
      
      this.Qr.email.push({value:''})
      console.log(this.Qr.email);
    }
    else if (ligne === "nom"){
      
      this.Qr.nom.push({value:''})
      console.log(this.Qr.nom);
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