import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  imports: [FormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {
  cliente: Cliente = {} as Cliente;
  confirmarSenha: string = "";

  //acesso a camada de serviço
  private service = inject(ClienteService);
  private router = inject(Router)

  salvar() {
    if (this.cliente.senha !== this.confirmarSenha) {
      alert('As senhas não são iguais.');
      return;
    }
    if (this.clienteid) {
      this.service.editar(this.cliente).subscribe({
        next: (cliente) => {
          alert(`Cliente: ${cliente.nome} Alterado com sucesso`)
          this.cliente = cliente;
          this.router.navigate(['/admin-clientes-listar']);
        },
        error: () => alert('Erro ao alterar o cliente.')
      });
    } else {
      this.service.incluir(this.cliente).subscribe({
        next: (cliente) => {
          alert(`Cliente: ${cliente.nome} criado com id ${cliente.id}`)
          this.router.navigate(["/admin-clientes-listar"])
        }
      });
    }
  }

  private route = inject(ActivatedRoute)
  clienteid: string | null = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    if (this.clienteid) {
      this.service.buscarPorId(this.clienteid).subscribe({
        next: (cliente) => this.cliente = cliente,
        error: () => alert('Cliente não encontrado.')
      });
    }
  }


}
