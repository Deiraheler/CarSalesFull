import {Component, Output, EventEmitter} from '@angular/core';
import { Input } from "@angular/core";
import { CarApiService } from "../../services/car-api.service";
import { ICar } from "../../interfaces/car";

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input() carData?: ICar;
  @Output() carDeleted = new EventEmitter<string>();

  public carImageWidth: number = 300;
  constructor(private _carAPIService: CarApiService) { }

  deleteCar(carId: string | undefined) {
    this._carAPIService.delCarDetails(carId).subscribe(result =>
    {
      console.log(result);
      this.carDeleted.emit(carId);
    });
  }
}
