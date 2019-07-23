import { Produto } from './produto.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  formData: Produto;
  readonly rootURL = 'https://localhost:44326/api/';
  list: Produto[];

  constructor(private http: HttpClient) { }

  post() {
    return this.http.post(this.rootURL + 'Produtoes', this.formData);
  }
  putPaymentDetail() {
    return this.http.put(this.rootURL + 'Produtoes/' + this.formData.id, this.formData);
  }
  deletePaymentDetail(id) {
    return this.http.delete(this.rootURL + 'Produtoes/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + 'Produtoes')
      .toPromise()
      .then(res => this.list = res as Produto[]);
  }
}
