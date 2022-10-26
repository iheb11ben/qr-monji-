import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';
import { MenuModel } from '../menu-model';
import { SmenuService } from '../smenu.service';

@Component({
  selector: 'app-affiche-menu',
  templateUrl: './affiche-menu.component.html',
  styleUrls: ['./affiche-menu.component.scss']
})
export class AfficheMenuComponent implements OnInit {

  qrcode: MenuModel = {
    nomQr: '',
    name: '',
    plat: [{ nomPlat: '', prixPlat: 0 }],
    user: '',
  };
 
id:string=''
    elementType = NgxQrcodeElementTypes.URL;
    correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    value = 'http://192.168.100.52:4200/core/menu/affiche';

    constructor(private menuServ:SmenuService, private activeRoute:ActivatedRoute,private route:Router) { }
  
    ngOnInit(): void {
    
      // this.id = localStorage.getItem('id')+''
      this.id=this.activeRoute.snapshot.params['id']
      console.log("the id is",this.id);
      
      this.affiche(this.id);
      

  
    }
    affiche(id:string){
      this.route.navigate(['/core/menu/affiche/'+id])
      
  //  console.log('bilel',id);
   
        this.menuServ.getbyId(id+'').subscribe(data=>{this.qrcode=data,console.log("data bilel",data);
  
    });
    this.value = 'http://192.168.100.52:4200/core/menu/affiche/'+id;
    console.log(id);
    
    }
    
    
  
}
