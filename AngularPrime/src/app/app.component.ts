import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPrime';

  cols: any[] = [
    { field: 'position', header: 'Position'},
    { field: 'name', header: 'Name'},
    { field: 'weight', header: 'Weight'},
    { field: 'symbol', header: 'Symbol'}
  ];

  elementList: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}
  ];

  newElementList: PeriodicElement[] = [
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'}
  ];

  data: PeriodicElement[] = this.elementList;

  cont = 0;

  isLoading = false;

  addCol(){
    this.isLoading = true;

    setTimeout(() => {
      if (this.newElementList.length) {
        const element = this.newElementList[this.cont];
        this.elementList.push(element);
        this.cont++;
        if (this.cont >= 4)
        {
          this.cont = 0;
        }
      }
      this.isLoading = false;
    }, 2000);
  }

  removeCol(){
    if (this.elementList.length) {
      this.elementList.pop();
    }
  }

}
