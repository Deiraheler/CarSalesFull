import { Component } from '@angular/core';
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import { ICar, Car } from "../../interfaces/car";
import {CarApiService} from "../../services/car-api.service";
import {CarComponent} from "../car/car.component";

@Component({
  selector: 'app-carlist',
  standalone: true,
  imports: [
    CarComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css'
})
export class CarlistComponent {
  carsData: ICar | any;
  show: boolean = false;

  constructor(private _carAPIService: CarApiService) {
  }

  ngOnInit() {
    this.getCars()
  }

  getCars() {
    this._carAPIService.getCarDetails().subscribe(carsData =>
    { this.carsData = Array.isArray(carsData) ? carsData : [carsData];
    });
  }

  addCar(make:string, model:string, year:string,imageUrl:string):boolean {
    let addCar:ICar;
    addCar=new Car(make,model,year,imageUrl);

    this._carAPIService.addCarDetails(addCar).subscribe(() =>
      {
        this.getCars();
      }
    );
    return false;
  }

  //Deleting carPost from cars data
  onCarDeleted() {
    this.getCars();
  }
}
