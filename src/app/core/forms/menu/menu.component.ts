import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModel } from './menu-model';
import { SmenuService } from './smenu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  Qr: MenuModel = {
    nomQr: '',
    name: '',
    plat: [{ nomPlat: '', prixPlat: 0 }],
    user: '',
  };
  // nomPlat!:string;
  // prixPlat!:number
  constructor(private menuser: SmenuService, private router: Router) {}

  // menu!: MenuModel[];

  ngOnInit(): void {
    this.Qr.user = localStorage.getItem('idUser') + '';
    // console.log('iduser',this.Qr.user);
  }

  submit() {
    this.menuser.create(this.Qr).subscribe((data) => {
      localStorage.setItem('id', data._id);
      localStorage.setItem('idqr', data._id);
      console.log(data);
      console.log(data.name);

      this.router.navigate(['/core/menu/affiche/' + data._id]);
    });
  }

  addPlat(nomPlat:string,prixPlat:number) {
    console.log(nomPlat,prixPlat);

   
      this.Qr.plat.push({nomPlat,prixPlat });
  
  }
  removePlat(i: number) {
   
      this.Qr.plat.splice(i, 1);
  
  }
}
