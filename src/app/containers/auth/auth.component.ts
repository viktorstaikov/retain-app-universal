import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-container',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  user = {
    password: '',
    email: ''
  };

  mode: string = 'signin';
  linkText: string = 'Don\'t have an account?';

  constructor(private auth: AuthService, private router: Router) { }

  changeMode() {
    if (this.mode === 'signin') {
      this.mode = 'signup';
      this.linkText = 'Already have an account?';
    } else {
      this.mode = 'signin';
      this.linkText = 'Don\'t have an account?';
    }
  }

  authenticate() {
    this.auth.authenticate(this.mode, this.user)
      .subscribe(() => this.router.navigate(['']));
  }
}
