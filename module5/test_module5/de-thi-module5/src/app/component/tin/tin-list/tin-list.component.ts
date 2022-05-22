import {Component, OnInit} from '@angular/core';
import {Tin} from '../../../model/tin';
import {TinService} from '../../../service/tin.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-tin-list',
  templateUrl: './tin-list.component.html',
  styleUrls: ['./tin-list.component.css']
})
export class TinListComponent implements OnInit {
  tins: Tin[] = [];
  dienTich: any = '';
  gia: any = '';
  tatCa: any = '';
  huong: any;
  deletedTin: Tin;
   check = false;

  constructor(private tinService: TinService) {
  }

  ngOnInit(): void {
    this.getAllTin();
  }

  getAllTin() {
    this.tinService.findAllTin().subscribe((data) => {
      this.tins = data.content;
      console.log(this.tins);
    }, err => {
      console.log(err);
    });
  }

  getAllTinTatCa() {
    this.tinService.findAllTinTatCa(this.tatCa).subscribe(data => {
      this.tins = data;
      console.log(this.tins);
    }, err => {
      console.log(err);
    });
  }


  getAllTinDienTich() {
    this.tinService.findAlltinDienTich(this.dienTich).subscribe(data => {
      this.tins = data;
      console.log(this.tins);
    }, err => {
      console.log(err);
    });
  }

  getAllTinGia() {
    this.tinService.findAllTinGia(this.gia).subscribe(data => {
      this.tins = data;
      console.log(this.tins);
    }, err => {
      console.log(err);
    });
  }

  getAllTinHuong() {
    this.tinService.findAllTinHuong(this.huong).subscribe(data => {
      this.tins = data;
      console.log(this.tins);
    }, err => {
      console.log(err);
    });
  }

  onDeleteTin(tin: Tin) {
    console.log(tin);
    this.deletedTin = tin;
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#deleteModal');
    container.appendChild(button);
    this.check = true;
    button.click();
  }

  delete(event) {
    this.tinService.deleteTin(this.deletedTin).subscribe(() => {
      event.click();
      this.ngOnInit();
    }, (error: HttpErrorResponse) => {
      alert('error');
    });
  }
}
