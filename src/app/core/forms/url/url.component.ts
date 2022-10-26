import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';
import Swal from 'sweetalert2';
import { Url } from './url';
import { UrlService } from './url.service';
@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit {
  elementType= NgxQrcodeElementTypes.URL
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH
  value = ''
  url:Url={url:'',user:''}
  constructor(private urlService:UrlService) { }
  ngOnInit(): void {
    this.url.user=localStorage.getItem('idUser')+''
  }
  alertWithSuccess(){
    Swal.fire('Félicitation !!', 'Votre QR-CODE est Telechargé', 'success')
  }
  alertWithSuccess2(){
    Swal.fire('Félicitation !!', 'Votre QR-CODE est Enregistré', 'success')
  }
  creatQRcode(){

this.urlService.createQrCode(this.url).subscribe(data=>{
  console.log(data);
  
})
  }
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 400;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a6');
      let position = 20;
      PDF.addImage(FILEURI, 'PNG', 35, position, fileWidth, fileHeight);
      PDF.save('Qr-Code.pdf');
    });
  }
  
}