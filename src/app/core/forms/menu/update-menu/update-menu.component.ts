import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MenuModel } from '../menu-model';
import { SmenuService } from '../smenu.service';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.scss']
})
export class UpdateMenuComponent implements OnInit {
  id:string=''
  qrcode: MenuModel = {
    nomQr: '',
    name: '',
    plat: [{ nomPlat: '', prixPlat: 0 }],
    user: '',
  };
  nomPlat!:string
  prixPlat!:number
  constructor(private menuServ:SmenuService, private activeRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.id=this.activeRoute.snapshot.params['id']
    this.menuServ.getbyId(this.id).subscribe(data=>{this.qrcode=data;console.log(data);})
  }
 update(){
    // this.route.navigate(['/core/menu/affiche/'+id])
    

 
      this.menuServ. updateMenu(this.id+'',this.qrcode).subscribe(data=>{this.qrcode=data
      // console.log('bilel',data);
     
  });
 
  
  }
  ajouterPlat(nomPlat:string,prixPlat:number){
    this.qrcode.plat.push({nomPlat,prixPlat });

  }
  deletePlat(i: number){

  
   
      this.qrcode.plat.splice(i, 1);
  
  }
  alertWithSuccess(){
    Swal.fire('Félicitation !!', 'votre menu a été modifié avec succès', 'success')
    this.route.navigate(['/core/list'])

  }
}
