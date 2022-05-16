import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryApi = 'http://localhost:3000/category';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryApi);
  }


  saveCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.categoryApi, category);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(this.categoryApi + '/' + id);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(this.categoryApi + '/' + id, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(this.categoryApi + '/' + id);
  }
}
