import { Component, inject, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../model/cliente';

@Component({
  selector: 'app-admin-clientes',
  imports: [],
  templateUrl: './admin-clientes.component.html',
  styleUrl: './admin-clientes.component.css'
})
export class AdminClientesComponent implements OnInit {

  ngOnInit(): void {
    this.listaClientes = this.service.listar();
  }


  private service = inject(ClienteService);
   listaClientes: Cliente[] = [];

 
  editar(id: number) {

  }
  excluir(id: number) {

  }

}
