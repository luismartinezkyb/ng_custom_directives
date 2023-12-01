import { Component, OnDestroy, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent implements OnDestroy, OnInit{
  ngOnInit(): void {
    // setInterval(()=>{
    //   this.counter.update(current=> current+1)
    // }, 1000)
  }
  
  public counter = signal(10);
  public user = signal<User>({
    id:	2,
    email:	"janet.weaver@reqres.in",
    first_name:	"Janet",
    last_name:	"Weaver",
    avatar:	"https://reqres.in/img/faces/2-image.jpg",
  })

  public fullname = computed<string>(()=>`${this.user().first_name} ${this.user().last_name}`)

  public userChangedEffect = effect(()=>{
    console.log(this.user().first_name, this.counter())
    
    console.log('UserchangedEffect triggered')
  })



  onFieldupdated(field:keyof User, value:string){
    console.log({field, value})
    // this.user.set({
    //   ...this.user(),
    //   [field]:value
    // })

    // this.user.update(current=>({
    //   ...current,
    //   [field]:value
    // }))
    this.user.update(current=>{
      switch(field){
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'id':
          current.id = Number(value);
          break;
      }
      return current
    })

  }
  ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }
}
