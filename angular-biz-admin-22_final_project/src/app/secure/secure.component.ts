import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {User} from "../interfaces/user";
import {Router} from "@angular/router";
import {Auth} from "../classes/auth";

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit{
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.authService.user().subscribe({
        next: (user)=>{Auth.userEmitter.emit(user);},
        error: ()=>this.router.navigate(['/login'])
      }
    )
  }
}
