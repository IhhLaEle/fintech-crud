import { Routes } from '@angular/router';
import { HomeComponent } from './saves/home/home.component';
import { Component } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent}
];
