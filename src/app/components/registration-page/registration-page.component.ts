import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  form: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.min(4)]),
      password: new FormControl(null, [Validators.required, Validators.min(8)])
    });
  }

  register(): void {
    this.userService.register({
      username: this.form.value.username,
      password: this.form.value.password,
      role: 'ROLE_USER'
    }).subscribe(value => {}, error => {});
  }
}
