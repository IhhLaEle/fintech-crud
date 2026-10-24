import { Component, inject, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../model/cliente';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-clientes',
  imports: [RouterLink],
  templateUrl: './admin-clientes.component.html',
  styleUrl: './admin-clientes.component.css'
})
export class AdminClientesComponent implements OnInit {

  ngOnInit(): void {
    this.service.listar().subscribe({
      next: (clientes) => {
        this.listaClientes = clientes;
      }
    })
  }


  private service = inject(ClienteService);
  listaClientes: Cliente[] = [];


  editar(id: string) {

  }
  excluir(id: string) {
    this.service.excluir(id).subscribe({
      next: () => { this.listaClientes.filter(cliente => cliente.id != id) }
    });
  }

}
