import { Component } from '@angular/core';

interface Country {
  id: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBootstrap';
  ariavaluenow = 0;

  countriesList: Array<Country> = [
    { id: 1, name: 'Russia', flag: 'f/f3/Flag_of_Russia.svg', area: 17075200, population: 146989754 },
    { id: 2, name: 'Canada', flag: 'c/cf/Flag_of_Canada.svg', area: 9976140, population: 36624199 },
    { id: 3, name: 'United States', flag: 'a/a4/Flag_of_the_United_States.svg', area: 9629091, population: 324459463 },
    { id: 4, name: 'China', flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg', area: 9596960, population: 1409517397}
  ];

  addCountriesList: Array<Country> = [
    { id: 1, name: 'Russia', flag: 'f/f3/Flag_of_Russia.svg', area: 17075200, population: 146989754 },
    { id: 2, name: 'Canada', flag: 'c/cf/Flag_of_Canada.svg', area: 9976140, population: 36624199 },
    { id: 3, name: 'United States', flag: 'a/a4/Flag_of_the_United_States.svg', area: 9629091, population: 324459463 },
    { id: 4, name: 'China', flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg', area: 9596960, population: 1409517397}
  ];

  countries = this.countriesList;

  cont = 0;

  isLoading = false;

  remove()
  {
    if (this.addCountriesList.length)
    {
      this.countriesList.pop();
      this.addCountriesList.push();
    }
  }

  add() {
    if (this.addCountriesList.length >= 0) {
      const country = this.addCountriesList[this.cont];
      this.countriesList.push(country);
      this.cont++;
      if (this.cont >= 4)
      {
        this.cont = 0;
      }
      document.getElementById('barra').classList.toggle ('finish');
    }
  }
}
