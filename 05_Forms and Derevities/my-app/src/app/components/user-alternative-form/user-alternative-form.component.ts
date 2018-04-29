import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserAlternativeFormService} from './user-alternative-form.service';

@Component({
  templateUrl: './user-alternative-form.component.html',
  styleUrls: ['./user-alternative-form.component.css'],
  providers: [UserAlternativeFormService]
})
/*The form from the exercise*/
export class LargeFormComponent {

  userDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userAlternativeFormService: UserAlternativeFormService) {
    const standardValidators = Validators.compose([Validators.required, Validators.minLength(5)]);
    this.userDetailsForm = this.formBuilder.group({
        email: [null, Validators.compose([Validators.required, Validators.pattern('.+@.+\\..+')])],
        username: [null, standardValidators],
        password: [null, standardValidators],
        repeatPassword: [null, standardValidators],
        address: [null, Validators.compose([Validators.required, Validators.minLength(10)])],
        country: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        city: [''],
        zipCode: [''],
        mobile: ['']
      },
      {validator: LargeFormComponent.matchPassword}
    );
  }

  static matchPassword(AC: AbstractControl) {
    const password = AC.get('password').value;
    const repeatPassword = AC.get('repeatPassword').value;
    const dirty = AC.get('repeatPassword').dirty;
    if ((password !== repeatPassword) && dirty) {
      AC.get('repeatPassword').setErrors({MatchPassword: true});
    }
  }

  submitForm(form) {
    this.userAlternativeFormService.saveUser(form.value).subscribe((resp) => {
      console.log(resp);
    });
  }
}

