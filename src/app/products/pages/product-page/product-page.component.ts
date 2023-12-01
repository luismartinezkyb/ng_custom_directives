import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {

  private fb = inject(FormBuilder);
  constructor(
    // private fb: FormBuilder
  ) {}

  public color: string = 'green';
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email, Validators.maxLength(8)]],
  })


  onSend():void{

  }
  changeColor():void{
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
}
