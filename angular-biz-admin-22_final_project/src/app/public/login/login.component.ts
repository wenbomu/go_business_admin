import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../public.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit(): void {
    console.log(this.form.getRawValue())

    // this.http.post(`${environment.api}/login`, this.form.getRawValue(), {
    //   withCredentials:true
    // })
    //   .subscribe(
    //   res => {
    //     console.log(res)
    //   }
    // )

    this.authService.login(this.form.getRawValue()).subscribe(
      () => {
        this.router.navigate(['/']);
      }
    )
  }

}
