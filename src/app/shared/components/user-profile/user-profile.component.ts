import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  animations: [
    trigger('myTrigger', [
      state('small', style({ transform: 'scale(1)' })),
      state('large', style({ transform: 'scale(1.4)' })),
      state('extra-large', style({ transform: 'scale(2)' })),
      transition('* => *', animate('500ms ease-out'))],),
  ],
})

export class UserProfileComponent implements OnInit {
  state: string = 'small';
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  toggleState() {
    this.state = this.state == 'small' ? 'large' : 'small';
  }
}
