import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit{
  

  private _color:string = 'red';
  private htmlElement?: ElementRef<HTMLElement>;
  private _errors?: ValidationErrors| null;

  @Input() set color(value:string){
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors| null | undefined){
    this._errors = value;
    this.setErrorMessage()
  }

  constructor(
    private el: ElementRef<HTMLElement>
  ) { 
    // console.log('contructor directive', el)

    this.htmlElement = el;
    // this.htmlElement.nativeElement.innerHTML = 'Hola mundo'
  }
  ngOnInit(): void {
    this.setStyle()
  }

  setStyle():void{
    const element = this.htmlElement;
    if(!element) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage():void{
    const element = this.htmlElement;
    if(!element) return;
    if(!this._errors){
      element.nativeElement.innerHTML = 'no hay errores';
      return;
    }
    console.log(this._errors);
    const errors = Object.keys(this._errors)
    if(errors.includes('required')){
      element.nativeElement.innerHTML = 'This field is required';
    }
    if(errors.includes('minlength')){
      const min = this._errors['minlength']['requiredLength']
      const current = this._errors['minlength']['actualLength']
      element.nativeElement.innerHTML = `The fiels must be at least ${min} characters`;
    }
    if(errors.includes('email')){
      element.nativeElement.innerHTML = 'This does not look like a valid email address ';
    }
  }
    // let errors = []
    // for (const erro in this._errors) {
    //   errors.push(this.getErrorFromKey(erro, this._errors[erro]))
    // }
    // console.log(errors)
  // getErrorFromKey(key: string, condition:any):string{
  //   switch(key){
  //     case 'required':
  //       return 'The field is required!'
  //       break;
  //     case 'minlength':
  //       return `The minimum length is ${condition.requiredLength}`
  //       break;
  //     case 'email':
  //       return 'This does not look like a valid email address'
  //       break;
  //     case 'maxlength':
  //       return `The maximun length allowed is ${condition.requiredLength}`
  //       break;
  //     default:
  //       return 'The field is required!'
  //       break;
  //   }
  // }
}
