import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servererror',
  templateUrl: './servererror.component.html',
  styleUrls: ['./servererror.component.scss'],
})
export class ServerErrorComponent implements OnInit {
  error: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    console.log(navigation);
    this.error = navigation && navigation.extras && navigation.extras.state && navigation.extras.state.error;
  }

  ngOnInit(): void {}
}
