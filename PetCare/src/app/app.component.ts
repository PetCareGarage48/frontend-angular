import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PetCare';

  constructor(
    private router: Router,
    public authorizationService: AuthorizationService
  ) {}

  logout() {
    this.router.navigate(["login"]);
    this.authorizationService.logOut();
  }
}
