import { Component, OnInit } from "@angular/core";
import { ProdutoService } from './../../shared/produto.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styles: []
})
export class ProdutoComponent {

  constructor(private service: ProdutoService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      id: 0,
      nome: '',
      descricao: '',
      preco: ''
      
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.post().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Cadastrado com sucesso', 'Cadastro dos Produtos');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Editado com sucesso', 'Cadastro dos Produtos');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
