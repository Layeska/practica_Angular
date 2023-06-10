import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css','../app.component.css']
})
export class PipesComponent {
  name = 'ana'
  date = '2023-06-07T13:59:31.238Z'

  estado = 1

  ngOnInit(): void {

  }

  changeState() {
    this.estado = 0
  }

  
}
