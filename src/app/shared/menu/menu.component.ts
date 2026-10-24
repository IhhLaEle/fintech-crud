import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  itensMenu = [
    {label:'Inicio',link:''},
    { label: 'Cadastre-se', link: '/cliente-cadastro' },
    {label:'Sobre',link:'sobre'},
    {label:'Contas',link:'contas'}

  ];
}
