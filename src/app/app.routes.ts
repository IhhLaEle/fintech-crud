import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { AdminClientesComponent } from './pages/admin/admin-clientes/admin-clientes.component';
import { ClienteFormComponent } from './pages/cliente-form/cliente-form.component'

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'admin-clientes-listar',component:AdminClientesComponent},
    { path: 'cliente-cadastro', component: ClienteFormComponent },
    { path: 'admin-clientes-editar/:id', component:ClienteFormComponent}

];
