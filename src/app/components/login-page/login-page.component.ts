import {Component, Injectable, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/auth/authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;

  constructor(private authenticationService: AuthenticationService, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.min(4)]),
      password: new FormControl(null, [Validators.required, Validators.min(8)])
    });
  }

  login(): void {
    this.authenticationService.logout();
    this.form.disable();
    this.authenticationService.login(this.form.value).subscribe((result) => {
      this.location.back();
    }, (error: HttpErrorResponse) => {
      if (error.status === 418) {
        this.router.navigate(['/login'], {
          queryParams: {
            ErrorLoginOrPassword: true
          }
        });
      }
      this.form.enable();
    });
  }
}
