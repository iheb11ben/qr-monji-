import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './forms/menu/menu.component';
import { CartevisiteComponent } from './forms/cartevisite/cartevisite.component';
import { DetailComponent } from './compte/detail/detail.component';
import { ParametreComponent } from './compte/parametre/parametre.component';
import { UrlComponent } from './forms/url/url.component';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';
import { QRCodeModule } from 'angularx-qrcode';
import { AfficheComponent } from './forms/cartevisite/affiche/affiche.component';
import { Affiche2Component } from './forms/cartevisite/affiche2/affiche2.component';
import { AfficheMenuComponent } from './forms/menu/affiche-menu/affiche-menu.component';
import { FormLibreComponent } from './forms/form-libre/form-libre.component';
import { FormLibre2Component } from './forms/form-libre2/form-libre2.component';
import { UpdatecarteComponent } from './forms/cartevisite/updatecarte/updatecarte.component';
import { UpdateMenuComponent } from './forms/menu/update-menu/update-menu.component';

import { UpdateUrlComponent } from './forms/url/update-url/update-url.component';
import { AfficheUrlComponent } from './forms/url/affiche-url/affiche-url.component';
import { DemoComponent } from './demo/demo.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    CartevisiteComponent,
    DetailComponent,
    ParametreComponent,
    UrlComponent,
    UpdatecarteComponent,
    AfficheComponent,Affiche2Component, AfficheMenuComponent, FormLibreComponent, FormLibre2Component, UpdateMenuComponent, UpdateUrlComponent, AfficheUrlComponent, DemoComponent

   

    

  ],
  imports: [
    CommonModule,
    // QRCodeModule,
    CoreRoutingModule,
    FormsModule,
    NgxQRCodeModule,
    NgxQrcodeStylingModule,
    QRCodeModule,
    
  ]
})
export class CoreModule { }
