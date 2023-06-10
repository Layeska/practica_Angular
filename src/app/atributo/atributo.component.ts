import { Component } from '@angular/core';

@Component({
  selector: 'app-atributo',
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.css', '../app.component.css']
})
export class AtributoComponent {

  messageType = 1
  inputValue = 'Holaxxxx'

  ngOnInit() {

  }
}
