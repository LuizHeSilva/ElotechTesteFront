import { PessoaModel } from './../model/pessoa.model';
import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {

  pessoa: PessoaModel = new PessoaModel();
  pessoas: Array<PessoaModel> = new Array();

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.pessoaService.listar().subscribe(retorno => this.pessoas = retorno);
  }

  editar(pessoa: PessoaModel) {
    this.pessoa = pessoa;
    this.listar();
  }

  atualizar(pessoa: PessoaModel) {
    this.pessoaService.alterar(this.pessoa);
    this.pessoa = new PessoaModel();
    this.listar();
  }

  excluir(pessoa: PessoaModel) {
    if (confirm('Você tem certeza que deseja deletar?')) {

      this.pessoaService.excluir(pessoa);

      console.log(pessoa)

      this.listar();
    }
  }

  salvar(frm: FormGroup) {
    this.pessoaService.salvar(this.pessoa).subscribe(retorno => {
      this.pessoas.push(this.pessoa)
      frm.reset();
      this.listar();
    });
  }

}
