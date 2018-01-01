import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Errors, UserService } from '../shared';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authType: String = '';
  title: String = '';
  errors: Errors = new Errors ();
  isSubmitting = false;
  authForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      // Set the title for the page accordingly
      this.title = (this.authType === 'login') ? 'Sign In' : 'Sign Up';
      // add form control for username if this is the register page
      if (this.authType === 'register') {
        this.authForm.addControl('username', new FormControl('', Validators.required));
      }
    });
  }

  submitForm(): void {
    this.isSubmitting = true;
    this.errors = new Errors();

    const credentials = this.authForm.value;

    this.userService.attemptAuth(this.authType, credentials)
        .subscribe(
          data => this.router.navigateByUrl('/'),
          err => {
            this.errors = err;
            this.isSubmitting = false;
          }
        );

    console.log (credentials);
  }

}
