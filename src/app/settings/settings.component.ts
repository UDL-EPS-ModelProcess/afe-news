import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../shared';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user: User = new User();
  settingsForm: FormGroup;
  errors: Object= { };
  isSubmitting = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.settingsForm = this.fb.group({
      image: '',
      username: '',
      bio: '',
      email: '',
      password: ''
    });
  }

  ngOnInit() {
    // Make a fresh copy of the current user's object to place in editable form fields
    (<any>Object).assign(this.user, this.userService.getCurrentUser());
    // Fill the form
    this.settingsForm.patchValue(this.user);
  }

  logout(): void {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }
  submitForm (): void {
    this.isSubmitting = true;

    console.log (this.settingsForm.value);

    this.updateUser (this.settingsForm.value);

    // Create user service update
    this.userService.updateUser(this.user)
        .subscribe(updatedUser => this.router.navigateByUrl('/profile/' + updatedUser.username),
                   error => {
                     this.errors = error;
                     this.isSubmitting = false;
                   });
  }

  updateUser(values: Object): void {
    (<any>Object).assign(this.user, values);
  }

}
