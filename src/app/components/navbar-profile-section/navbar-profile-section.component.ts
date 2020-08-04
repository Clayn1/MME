import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/auth/authentication.service';

@Component({
  selector: 'app-navbar-profile-section',
  templateUrl: './navbar-profile-section.component.html',
  styleUrls: ['./navbar-profile-section.component.css']
})
export class NavbarProfileSectionComponent implements OnInit {
  loggedIn: boolean;
  username: string;

  constructor(private auth: AuthenticationService) {
    auth.authSubscribe().subscribe(value => {
      this.loggedIn = value;
      if (!!value){
        this.username = this.auth.getUsername();
      }
    });
  }

  logout(): void {
    this.auth.logout();
  }

  ngOnInit(): void {
  }
}
