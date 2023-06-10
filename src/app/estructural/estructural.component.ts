import { Component } from '@angular/core';

@Component({
  selector: 'app-estructural',
  templateUrl: './estructural.component.html',
  styleUrls: ['./estructural.component.css', '../app.component.css']
})
export class EstructuralComponent {
  isError = false;

  sections = [
    'Introducción',
    'Desarrollo',
    'Desenlace',
    'Conclusion'
  ]


  section1 = [
    {
      id: 1, name: 'Introduccion', duration: '10'
    },
    {
      id: 2, name: 'Desarrollo', duration: '40'
    },
    {
      id: 3, name: 'Conlusion', duration: '60'
    }
  ]

  ngOnInit() {
    console.log('Incio')

    /*setTimeout(() => {
      this.isError = true
    }, 4000)*/
  }

  showError() {
    this.isError = true
  }
}
