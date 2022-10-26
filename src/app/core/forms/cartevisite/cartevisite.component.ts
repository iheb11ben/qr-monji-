import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartevisiteService } from './cartevisite.service';
import { Catremodel } from './catremodel';

@Component({
  selector: 'app-cartevisite',
  templateUrl: './cartevisite.component.html',
  styleUrls: ['./cartevisite.component.scss']
})
export class CartevisiteComponent implements OnInit {

  qrcode:Catremodel={nomQr:'',  nom:[{value:""}],phone:[{value:0}],prenom:[{value:""}],adresse:[{value:""}],email:[{value:""}],ville:[{value:""}],user:''};
Qr:Catremodel={nomQr:'',  nom:[{value:""}],phone:[{value:0}],prenom:[{value:""}],adresse:[{value:""}],email:[{value:""}],ville:[{value:""}],user:''};
Qr2:Catremodel={nomQr:'',nom:[{value:""}],phone:[{value:0}],prenom:[{value:""}],adresse:[{value:""}],email:[{value:""}],ville:[{value:""}],user:''};
// phones:number[]=[0,0];
phones:{value:number}[]=[]
phone!:number;
// ligne!:string
// public myAngularxQrCode!: string ;

  constructor(private contentServ:CartevisiteService,private activate:ActivatedRoute,private router:Router) { 
    // this.myAngularxQrCode = '';
  }

  ngOnInit(): void {
  
this.Qr.user=localStorage.getItem('idUser')+''
console.log('iduser',this.Qr.user);

  }
  submit(){
    this.contentServ.createQrCode(this.Qr).subscribe(data=>{
      console.log(data);
      localStorage.setItem('id',data._id)
      // localStorage.setItem('idqr',data._id)
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
    this.Qr.phone.push({value:0})
    }
    else if (ligne === "email"){
      
      this.Qr.email.push({value:''})
      console.log(this.Qr.email);
    }else if (ligne === "adresse"){
      
      this.Qr.adresse.push({value:''})
      console.log(this.Qr.adresse);
    }else if (ligne === "activite"){
      
      this.Qr.ville.push({value:''})
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
    else if(name === 'adresse'){
      this.Qr.adresse.splice(i,1);
    }
    else if(name === 'activite'){
      this.Qr.ville.splice(i,1);
    }
  }
 

}
