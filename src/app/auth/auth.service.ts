import { Injectable } from '@angular/core';
import { LlamadasService } from '../Services/llamadas.service';
import { Subscription, Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { FormGroup} from '@angular/forms';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  userLoggedIn : User;

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  public respuesta : User[];
  loginSubscription: Subscription;
  constructor(private llamadas: LlamadasService) { }

  login(loginForm:FormGroup): Observable<boolean> {
    this.loginSubscription = this.llamadas.acces(loginForm.get('usuario').value,loginForm.get('password').value).subscribe(
      (response:User[]) => {
        this.respuesta = response;
        if(this.respuesta.length===0){
          this.isLoggedIn = false;
        }else{
          this.userLoggedIn = this.respuesta[0];
          this.isLoggedIn = true;     
        }
      }
    )
    return of(true).pipe(delay(1000));
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userLoggedIn = undefined;
  }

  ngOnDestroy(){
    if(!this.loginSubscription.closed){
      this.loginSubscription.unsubscribe();
    }
  }
}