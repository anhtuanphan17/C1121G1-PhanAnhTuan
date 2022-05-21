import {Component, OnInit} from '@angular/core';
import {Tin} from "../../../model/tin";
import {TinService} from "../../../service/tin.service";

@Component({
  selector: 'app-tin-list',
  templateUrl: './tin-list.component.html',
  styleUrls: ['./tin-list.component.css']
})
export class TinListComponent implements OnInit {
  tins: Tin[] = [];
  dienTich: any = '';
  gia: any = '';
  huong: string = '';
  tatCa: any = '';

  constructor(private tinService: TinService) {
  }

  ngOnInit(): void {
    this.getAllTin();
  }

  getAllTin() {
    this.tinService.findAllTin().subscribe(data => {
      this.tins = data;
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
}
