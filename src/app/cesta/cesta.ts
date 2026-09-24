import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cestaservice } from '../cestaservice';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cesta',
  imports: [CommonModule, RouterLink],
  templateUrl: './cesta.html',
  styleUrl: './cesta.css',
})
export class Cesta {
  cestaService = inject(Cestaservice);
}