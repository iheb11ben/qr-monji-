import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { CartevisiteService } from '../cartevisite.service';
import { Catremodel } from '../catremodel';

@Component({
  selector: 'app-updatecarte',
  templateUrl: './updatecarte.component.html',
  styleUrls: ['./updatecarte.component.scss']
})
export class UpdatecarteComponent implements OnInit {
  // Qr:Catremodel={nomQr:'',  nom:[{value:""}],phone:[{value:0}],prenom:[{value:""}],adresse:[{value:""}],email:[{value:""}],ville:[{value:""}],user:''};
  Qr:any={nomQr:'',  nom:[{value:""}],phone:[{value:0}],prenom:[{value:""}],adresse:[{value:""}],email:[{value:""}],ville:[{value:""}],user:''};
  constructor(private cartes:CartevisiteService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    let id =this.activeRoute.snapshot.params['id']
    this.cartes.getQrCode(id).subscribe(data=>{this.Qr=data;console.log(data);})
    
    
    
  }

  update(){
    // console.log(localStorage.getItem('idqr'));
    this.Qr.user=localStorage.getItem('idUser')+'';
    
    this.cartes.updateQrCodebyIduser(localStorage.getItem('id'),this.Qr).subscribe(data=>this.Qr=data[0])
  }
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
  alertWithSuccess(){
    Swal.fire('Félicitation !!', 'Votre QR-CODE est à jour', 'success')
  }
}
