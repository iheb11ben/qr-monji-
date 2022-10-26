import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartevisiteService } from '../forms/cartevisite/cartevisite.service';
import { Catremodel } from '../forms/cartevisite/catremodel';
import { MenuModel } from '../forms/menu/menu-model';
import { SmenuService } from '../forms/menu/smenu.service';
import { UrlService } from '../forms/url/url.service';

@Component({
  selector: 'app-listqr',
  templateUrl: './listqr.component.html',
  styleUrls: ['./listqr.component.scss']
})
export class ListqrComponent implements OnInit {
myVisite!:Catremodel[];
mymenu!:MenuModel[];
url:String[]=[];
urlQr:any
  qrcode: any;
  search_name:any 
  
  constructor(private carteS:CartevisiteService,private route:Router,private sermenu:SmenuService,private urlService:UrlService) { }
  ngOnInit(): void {
this.carteS.getQrCodebyIduser(localStorage.getItem('idUser')+'').subscribe(data=>{this.myVisite=data,console.log('visit',this.myVisite) 
})
this.sermenu.getbyIduser(localStorage.getItem('idUser')+'').subscribe(data=>{this.mymenu=data,console.log('menuu',this.mymenu)
})
this.urlService.getQrCodebyIduser(localStorage.getItem('idUser')+'').subscribe(data=>{this.urlQr=data,console.log('url',this.urlQr)
  })
}
  affiche(id :any){
      // let id = this.myVisite._id
      //  console.log('iddddd',id);
      console.log('idddddddddddddd',id);
      this.carteS.getQrCode(id+'').subscribe(data=>{this.qrcode=data,console.log("data",this.qrcode);
      localStorage.setItem('idqr',id)
      this.route.navigate(['/core/carte/affiche/'+id])});
  }
  affiche2(id :any){
      // let id = this.myVisite._id
      //  console.log('iddddd',id);
      console.log('idddddddddddddd',id);
      this.sermenu.getbyId(id+'').subscribe(data=>{this.qrcode=data,console.log("data",this.qrcode);
      localStorage.setItem('idqr',id)
      this.route.navigate(['/core/menu/affiche/'+id])
  });
 
  }
  afficheUrl(id :any){
    // let id = this.myVisite._id
    //  console.log('iddddd',id);
    console.log('idddddddddddddd',id);
    this.urlService.getQrCodebyIduser(id+'').subscribe(data=>{this.urlQr=data,console.log("data",this.urlQr);
    localStorage.setItem('idqrUrl',id)
    this.route.navigate(['/core/url/affiche/'+id])
});

}
deleteMenu(id:any){
  this.sermenu.deleteMenu(id+'').subscribe(data=>{this.mymenu=data,console.log(this.mymenu);
  
  });
  }
deleteUrl(id:any){
 
  this.urlService.delete(id).subscribe(data=>{console.log('deleted',data);
  
    this.urlService.getQrCodebyIduser(localStorage.getItem('idUser')+'').subscribe(data=>{this.urlQr=data;console.log('data2',data);
    }
    )
  })
}
deleteContent(id:any){
  console.log(id); 
  this.carteS.delete(id).subscribe(data=>{console.log('deleted',data);
  this.carteS.getQrCodebyIduser(localStorage.getItem('idUser')+'').subscribe(data=>{this.myVisite=data;console.log('data',data);  
})
});
}
}
