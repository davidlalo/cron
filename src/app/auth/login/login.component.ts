import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm = new FormGroup({
    usuario : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  });

  constructor(public authService: AuthService, public router: Router, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.login(this.loginForm);
  }

  login(loginForm:FormGroup) {
    this.authService.login(loginForm).subscribe(() => {
      if (this.authService.isLoggedIn) {
        const redirectUrl = '/admin';
        this.router.navigate([redirectUrl]);
      }else{
        this._snackBar.open("Credenciales incorrectas", "logout", {
          duration: 2000,
        });
        this.loginForm.setValue({usuario:'',password:''});
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
