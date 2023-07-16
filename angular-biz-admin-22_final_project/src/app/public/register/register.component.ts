import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../public.component.css']
})
export class RegisterComponent {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  passwordConfirm = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log({
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      password_confirm: this.passwordConfirm,
    });

    // this.http.post('http://localhost:8080/api/register', {
    //   first_name: this.firstName,
    //   last_name: this.lastName,
    //   email: this.email,
    //   password: this.password,
    //   password_confirm: this.passwordConfirm,
    // }).subscribe(res=>{
    //   console.log(res);
    // })

    // redirect to login
    this.authService.register({
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      password_confirm: this.passwordConfirm,
    }).subscribe(() => {
      this.router.navigate(['/login'])
    })
  }
}
