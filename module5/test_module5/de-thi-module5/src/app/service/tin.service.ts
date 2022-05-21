import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Tin} from "../model/tin";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TinService {
  tinApi = 'http://localhost:3000/tin';

  constructor(private http: HttpClient) {
  }

  findAllTin(): Observable<Tin[]> {
    return this.http.get<Tin[]>(this.tinApi);
  }


  createTin(tin: Tin): Observable<Tin> {
    return this.http.post<Tin>(this.tinApi, tin);
  }

  findAllTinTatCa(tatCa: any):Observable<any> {
    return this.http.get<Tin>(this.tinApi +'?q='+tatCa);
  }


  findAlltinDienTich(dienTich: any): Observable<Tin[]>{
  return this.http.get<Tin[]>(this.tinApi + '?dienTich_like=' + dienTich);
  }


  findAllTinGia(gia: any):Observable<Tin[]> {
    return this.http.get<Tin[]>(this.tinApi + '?gia_like=' + gia);
  }

  findAllTinHuong(huong: string):Observable<Tin[]> {
    return this.http.get<Tin[]>(this.tinApi + '?huong_like='+huong);
  }
}
