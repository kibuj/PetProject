import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ApiService, Car} from "../services/api.service";

@Component({
  selector: 'app-colections-container',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],

  templateUrl: './colections-container.component.html',
  styleUrl: './colections-container.component.scss'
})
export class ColectionsContainerComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: ApiService) {
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe({
      next: (data) => {
        this.cars = data;
        console.log('Cars:', data);
      },
      error: (err) => {
        // Цей блок все ще буде виконуватися, якщо CORS не виправлено на сервері
        console.error('API error:', err);
      }
    });
  }
}
