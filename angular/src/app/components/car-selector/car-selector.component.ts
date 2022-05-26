import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-selector',
  templateUrl: './car-selector.component.html',
  styleUrls: ['./car-selector.component.css'],
})
export class CarSelectorComponent implements OnInit {
  cars = ['Octane', 'Fennec', 'Dominus', 'Other'];

  constructor() {}

  ngOnInit(): void {}
}
