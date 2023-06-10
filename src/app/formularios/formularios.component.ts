import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.minLength(4), Validators.required]),
    isCheked: new FormControl(false)
  })

  ngOnInit(): void {
    
  }
}
