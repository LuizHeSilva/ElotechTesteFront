import { PessoaModel } from './model/pessoa.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  url: String = "http://localhost:8080/pessoa/";

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(this.url + 'listar');
  }

  alterar(pessoa: PessoaModel) {
    return this.http.put<PessoaModel>(this.url + 'alterar', pessoa);
  }

  salvar(pessoa: PessoaModel) {
    return this.http.post(this.url + 'salvar', pessoa);
  }

  excluir(pessoa: PessoaModel) {
    console.log(pessoa)
    return this.http.delete<PessoaModel>(this.url + 'excluir/' + pessoa.codigo);
  }
}
